import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (id: string) => {
    try {
        await AsyncStorage.setItem('id', id);
    } catch (error) {
        console.error('Error storing the token:', error);
    }
};

export const getData = async () => {
    try {
        return await AsyncStorage.getItem('userToken');
    } catch (error) {
        console.error('Error retrieving the token:', error);
        return null;
    }
};