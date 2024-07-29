import { Image, StyleSheet, Platform, View, Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/Colors";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: Colors.light.background }} >
        <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
