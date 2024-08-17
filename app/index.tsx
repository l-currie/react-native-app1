import { Text, View, Image } from 'react-native';
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, GestureHandlerRootView} from 'react-native-gesture-handler';
import images from '../constants/images'

export default function Index() {
  return (
    <GestureHandlerRootView>
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image source={images.logo}
          className='w-[130px] h-[84px]'
          resizeMode='contain'
          />
          <Image 
          source={images.cards}
          className='max-w-[380px] w-full h-[300px]' resizeMode='contain'/>
          <View className='relative mt-5'>
            <Text className='text-white text-3xl font-bold text-center'>Discover Endless Possibilities with
              <Text className='text-secondary-200'> Aora</Text> </Text>
              <Image source={images.path} className='w-[136px] h-[15px] absolute -bottom-2 -right-8' resizeMode='contain'></Image>
          </View>
          <Text className='text-sm font-pregular text-gray-100 text-center mt-7'>Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}
