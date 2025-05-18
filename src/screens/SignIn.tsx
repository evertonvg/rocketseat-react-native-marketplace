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
import { Input } from '@components/input'

import { useNavigation } from '@react-navigation/native' 
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { Title } from '@components/Title'
import { Paragraph } from '@components/Paragrath'


export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack>
        <SmallContainer>
          <Button variant="blue" title="Entrar" icon="whatsapp" />
          <Input placeholder='E-mail' variant='textarea' />
        <Title title='Boas vindas!' />
        <Paragraph text="Crie sua conta e use o espaço para comprar itens variados e vender seus produtos" />
        </SmallContainer>
      </VStack>
    </ScrollView>
  )
}
