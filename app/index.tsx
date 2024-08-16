import { Text, View } from 'react-native';
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl'>lolll</Text>
      <StatusBar style="auto"/>
      <Link href='/profile'>Go to profile</Link>
    </View>
  );
}
