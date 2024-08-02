import * as SecureStore from 'expo-secure-store';

export const storeToken = async (token: string): Promise<void> => {
    try {
        await SecureStore.setItemAsync('userToken', token);
    } catch (error) {
        console.error('Error storing the token:', error);
    }
};

export const getToken = async (): Promise<string | null> => {
    try {
        return await SecureStore.getItemAsync('userToken');
    } catch (error) {
        console.error('Error retrieving the token:', error);
        return null;
    }
};

export const deleteToken = async (): Promise<void> => {
    try {
        await SecureStore.deleteItemAsync('userToken');
    } catch (error) {
        console.error('Error deleting the token:', error);
    }
};
