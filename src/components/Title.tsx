import { Center, Text } from '@gluestack-ui/themed'

type TitleProps = {
  title: string 
  align?: 'left' | 'center' | 'right'
}

export function Title({title, align="center"}:TitleProps) {
  return (
    <Center flex={1}>
        <Text 
            fontSize="$xl" fontWeight="bold" color="$gray1" textAlign={align} marginBottom={4} fontFamily='$karlaBold'>
            {title}
        </Text>
    </Center>
  )
}
