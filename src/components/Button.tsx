import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from '@gluestack-ui/themed' 

import { Pencil, Plus, WhatsappLogo, TrashSimple, Power, Tag  } from 'phosphor-react-native'

import { config } from '../../config/gluestack-ui.config'

import { buttonProps } from 'src/props/ButtonProps'


export function Button({title, isLoading = false, icon, variant = "blue", ...props}: buttonProps) {
  const textcolor = variant === 'blue' || variant === 'black' ? config.tokens.colors.gray7 : config.tokens.colors.gray2
  
  return (
    <GluestackButton
      w="$full"
      h="$12"
      gap={"$2"}
      bg={variant === 'blue' ? '$blueLight' : variant === 'black' ? '$gray1' : '$gray5'}
      borderRadius="$md"
      $active-bg={variant === 'blue' ? '$blue  ' : variant === 'black' ? '$gray2' : '$gray6'}
      disabled={isLoading}
      {...props}     
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <>
          {icon === 'pencil' && <Pencil size={16} color={textcolor} />}
          {icon === 'plus' && <Plus size={16} color={textcolor} />} 
          {icon === 'whatsapp' && <WhatsappLogo weight='fill' size={16} color={textcolor} />}
          {icon === 'trash' && <TrashSimple size={16} color={textcolor} />}
          {icon === 'power' && <Power size={16} color={textcolor} />}  
          {icon === 'tag' && <Tag size={16} color={textcolor} />} 
       
          <Text
            color={textcolor}
            fontFamily="$karla"
            fontSize="$sm"
            textAlign="center"
          >
            {title}
          </Text>
         </>
      )}
    </GluestackButton>
  )
}
