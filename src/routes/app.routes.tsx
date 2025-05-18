import { Platform } from 'react-native'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { gluestackUIConfig } from '../../config/gluestack-ui.config'

import HomeSvg from '@assets/home.svg'
import AnnoucementSvg from '@assets/announcement.svg'
import LogoutSvg from '@assets/logout.svg.svg'

import { Home } from '@screens/Home'
import { Annoucement } from '@screens/Annoucement' 
import { LogOut } from '@screens/Logout'


type AppRoutes = {
  home: undefined
  annoucement: undefined
  logout: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { tokens } = gluestackUIConfig
  const iconSize = tokens.space['6']

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.green500,
        tabBarInactiveTintColor: tokens.colors.gray2,
        tabBarStyle: {
          backgroundColor: tokens.colors.gray6,
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: tokens.space['10'],
          paddingTop: tokens.space['6'],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="annoucement"
        component={Annoucement}
        options={{
          tabBarIcon: ({ color }) => (
            <AnnoucementSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="logout"
        component={LogOut}
        options={{
          tabBarIcon: ({ color }) => (
            <LogoutSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
{/*       
      <Screen
        name="exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      />  */}
    </Navigator>
  )
}
