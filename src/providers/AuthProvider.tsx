import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { storeToken, getToken, deleteToken } from '@/src/lib/secure-store';
import { storeId, getId } from "@/src/lib/async-storage";
import {loginUser, getUserDetails, signUpUser} from '../api/users/auth';
import {Alert} from "react-native";

interface Session  {
    id: string | null,
    email: string | null,
    token: string | null
}

interface AuthContextProps {
    session:  Session | null;
    loading: boolean;
    profile: any;
    signIn: (email: string, password: string) => Promise<boolean | undefined>;
    signUp: (email: string, password: string) => Promise<boolean | undefined>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    session: null,
    loading: true,
    profile: null,
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

    const storeUserInfos = async (data, error) => {

        await storeToken(data.session.access_token);

        await storeId(data.user.id);

        setSession({ id: data.session.user.id, email: data.session.user.email, token: data.session.access_token });

        const userDetails = await getUserDetails(data.session.user.id as string);

        setProfile(userDetails.data[0]);

        setLoading(false);

        if (error) {
            Alert.alert('Error', error);
            return false;
        }

        return true;
    }

    const signIn = async (email: string, password: string) => {
        try {
            const { data, error } = await loginUser(email, password);

            return await storeUserInfos(data, error);
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Veuillez réessayer svp.');
        }
    };

    const signOut = async () => {
        await deleteToken();
        setSession(null);
    };

    const signUp = async (email: string, password: string) => {
        try {
            const { data, error } = await signUpUser(email, password);

            return await storeUserInfos(data, error);
        } catch (error) {
            Alert.alert('Error', 'Veuillez réessayer svp.');
        }
    }

    return (
        <AuthContext.Provider value={{ session, loading, profile, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
