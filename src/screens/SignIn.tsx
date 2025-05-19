import { useState } from 'react'
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed'

import { SmallContainer } from '@components/SmallContainer'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

import { useNavigation } from '@react-navigation/native' 
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { Title } from '@components/Title'
import { Paragraph } from '@components/Paragrath'
import { Switch } from '@components/Switch'
import { Selected } from '@components/Selected'
import { SliderGallery } from '@components/Slider'
import { Space } from '@components/Space'


export function SignIn() {
  const [isActive, setIsActive] = useState(false)
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const handleChangeSwitch = () => {
    setIsActive(!isActive)
    console.log(isActive)
  }


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack 
        flex={1} 
        paddingBottom={40} 
        borderBottomRightRadius={40} 
        borderBottomLeftRadius={40} 
        position='relative'
        zIndex={15}>
        <SmallContainer>
          <Center>
            <Image
              source={require('@assets/logo.png')}
              alt="Logo"
              width={100}
              height={100}
            />
          </Center>
          <Text textAlign='center' fontSize="$2xl" fontFamily="$heading" fontWeight="bold" color="$gray1" marginTop={"$4"}>
            marketspace
          </Text>

          <Paragraph
            text="Seu espaço de compra e venda"
          />
          <Space space={10} />
          <Paragraph
            text="Acesse sua conta"
          />

          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <Space space={1} />
          <Input
            placeholder="Senha"
            eye
            secureTextEntry
            returnKeyType="send"
          />
          <Space space={1} />
          <Button
            title="Entrar"
            onPress={() => navigation.navigate('signUp')}
          />

        </SmallContainer>
        
      </VStack>
      <VStack 
        backgroundColor='$white' 
        height="$56" 
        alignItems='center' 
        justifyContent='center' 
        gap={4} 
        zIndex={1}
        position='relative'
        transform={[{ translateY: -40 }] }>
          
          <Paragraph
            text="Ainda não tem acesso?"
          />
          <SmallContainer>
            <Button
              title="Criar uma conta"
              variant='gray'
              onPress={() => navigation.navigate('signUp')}
            />
          </SmallContainer>
      </VStack>
    </ScrollView>
  )
}
