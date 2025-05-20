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

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Define the form data props type locally
type FormDataProps = {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: yup
    .string()
    .required('Informe a senha.')
    .min(6, 'A senha deve ter pelo menos seis dígitos.'),
})

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  })

  const [isActive, setIsActive] = useState(false)
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const handleChangeSwitch = () => {
    setIsActive(!isActive)
    console.log(isActive)
  }

  function handleSignin({
    email,
    password,
  }: FormDataProps) {
    console.log({email, password })
  }


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack 
        flex={1} 
        paddingBottom={60}
        paddingTop={60} 
        borderBottomRightRadius={40} 
        borderBottomLeftRadius="$full"
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
          <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}

                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                />
              )}
          />
          <Space space={1} />
              <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  secureTextEntry
                  returnKeyType="send"
                />
              )}
          />

          <Space space={1} />
          <Button
            title="Entrar"
            onPress={handleSubmit(handleSignin)}
          />

        </SmallContainer>
        
      </VStack>
      <VStack 
        backgroundColor='$white' 
        height="$32"
        paddingLeft="$12"
        paddingRight="$12"
        alignItems='center' 
        justifyContent='center' 
        gap="$2"
        zIndex={1}
        position='relative'
>
          
        <Paragraph
            text="Ainda não tem acesso?"
          />
          
            <Button
              title="Criar uma conta"
              variant='gray'
              onPress={() => navigation.navigate('signUp')}
            />
          

      </VStack>
    </ScrollView>
  )
}
