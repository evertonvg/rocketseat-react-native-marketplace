import { Center, Text } from '@gluestack-ui/themed'

type paragraphProps = {
  text: string
  align?: 'left' | 'center' | 'right'
}

export function Paragraph({text, align = 'center'}:paragraphProps) {
  return (
    <Center flex={1}>
        <Text 
            fontSize="$sm" textAlign={align} color="$gray2" marginBottom={4}>
            {text}
        </Text>
    </Center>
  )
}
