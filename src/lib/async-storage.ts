import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeId = async (id: string) => {
    try {
        await AsyncStorage.setItem('id', id);
    } catch (error) {
        console.error('Error storing the token:', error);
    }
};

export const getId = async () => {
    try {
        return await AsyncStorage.getItem('id');
    } catch (error) {
        console.error('Error retrieving the token:', error);
        return null;
    }
};