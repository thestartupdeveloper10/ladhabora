import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../components/CustomBtn';

export default function App() {
  return (
    <SafeAreaView className="bg-gray-200 h-full">
        <ScrollView
        contentContainerStyle={{
            height: "100%",
          }}
        >
            <View className="w-full flex justify-center items-center gap-5 h-full px-4">
                <View className="relative">
                <Text className="text-3xl font-bold text-center">
                Ladha{" "}
                <Text className="text-green-900">Bora</Text>
                </Text>
            </View>
            <CustomBtn/>
            </View>
        </ScrollView>

    </SafeAreaView>
  );
}

