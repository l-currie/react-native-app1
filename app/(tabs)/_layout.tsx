import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import icons from '../../constants/icons'

type TabIconProps = {
    icon: any,
    color: any,
    name: string,
    focused: boolean
}

const TabIcon = ({icon, color, name, focused}: TabIconProps) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image source={icon} tintColor={color} className='w-6 h-6'/>
            {/* <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs text-center black`}>{name}</Text> */}
        </View>
    )
}

const TabsLayout = () => {
  return (
    <View className=''>
      <>
        <Tabs
        screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: '#47d720', tabBarStyle: {
            borderTopWidth: 2,
            backgroundColor: '#161122',
            borderTopColor: '#232533',
            height: 40
        }}}>
            <Tabs.Screen name='home'
            options={{
                title:'Home',
                headerShown:false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon 
                    icon={icons.home}
                    color={color}
                    focused={focused}
                    name={'Home'}
                    />
                )
            }}/>
            <Tabs.Screen name='bookmark'
            options={{
                title:'Bookmarked',
                headerShown:false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon 
                    icon={icons.bookmark}
                    color={color}
                    focused={focused}
                    name={'Bookmarked'}
                    />
                )
            }}/>
            <Tabs.Screen name='create'
            options={{
                title:'Create',
                headerShown:false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon 
                    icon={icons.plus}
                    color={color}
                    focused={focused}
                    name={'Create'}
                    />
                )
            }}/>
            <Tabs.Screen name='profile'
            options={{
                title:'Profile',
                headerShown:false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon 
                    icon={icons.profile}
                    color={color}
                    focused={focused}
                    name={'Profile'}
                    />
                )
            }}/>
        </Tabs>
      </>
    </View>
  )
}

export default TabsLayout