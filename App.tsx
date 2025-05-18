/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from './config/gluestack-ui.config'
import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GluestackUIProvider config={config} >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent" 
          translucent  
        /> 
        {fontsLoaded ? <Routes /> : <Loading />}
      </GluestackUIProvider>
    </SafeAreaView>
  )
}
