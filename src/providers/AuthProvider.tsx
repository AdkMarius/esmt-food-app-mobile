import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { storeToken, getToken, deleteToken } from '@/src/lib/secure-store';
import { storeId, getId } from "@/src/lib/async-storage";
import {loginUser, getUserDetails, signUpUser} from '../api/users/auth';
import {Alert} from "react-native";
import {createNewUserBalance, readUserBalance, updateBalanceUser} from "@/src/api/account";

interface Session  {
    id: string | null,
    email: string | null,
    token: string | null
}

interface AuthContextProps {
    session:  Session | null;
    balance: number;
    loading: boolean;
    profile: any;
    setBalance: (balance: number) => void;
    updateBalance: (moneyToAdd: number) => Promise<boolean | undefined>;
    signIn: (email: string, password: string) => Promise<boolean | undefined>;
    signUp: (email: string, password: string) => Promise<boolean | undefined>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    session: null,
    loading: true,
    profile: null,
    balance: 0,
    setBalance: (balance: number) => {},
    updateBalance: async (moneyToAdd: number) => {
        return false;
    },
    signIn: async (email: string, password: string): Promise<boolean> => {
        return false;
    },
    signUp: async (email: string, password: string): Promise<boolean> => {
        return false
    },
    signOut: () => {}
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [balance, setBalance] = useState<number>(0);

    const readBalance = async (userId: string) => {
        const res = await readUserBalance(userId);

        if (res) {
            setBalance(res.data[0].balance);
            return true;
        }
        return false;
    };

    const updateBalance = async (moneyToAdd: number) => {
        const moneyAtAll = balance + moneyToAdd;
        const res = await updateBalanceUser(session?.id as string, moneyAtAll);

        if (res) {
            setBalance(res.data[0].balance);
            return true;
        }
        return false;
    };

    const storeUserInfos = async (data, error) => {

        if (error) {
            Alert.alert('Error', error);
            return false;
        }

        await storeToken(data.session.access_token);

        await storeId(data.user.id);

        setSession({ id: data.session.user.id, email: data.session.user.email, token: data.session.access_token });

        const userDetails = await getUserDetails(data.session.user.id as string);

        setProfile(userDetails.data[0]);

        await readBalance(data.session.user.id);

        setLoading(false);

        return true;
    };

    const signIn = async (email: string, password: string) => {
        const { data, error } = await loginUser(email, password);

        return await storeUserInfos(data, error);
    };

    const signOut = async () => {
        await deleteToken();

        setSession(null);
    };

    const signUp = async (email: string, password: string) => {
        const { data, error } = await signUpUser(email, password);

        const res = await createNewUserBalance(data.session.user.id);

        if (!res.data)
            return null;

        return await storeUserInfos(data, error);
    }

    return (
        <AuthContext.Provider value={{ session, loading, profile, balance, updateBalance, setBalance, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
