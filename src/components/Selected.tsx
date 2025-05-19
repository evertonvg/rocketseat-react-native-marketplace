import {
  Button as GluestackButton,
  View,
  Text,
} from '@gluestack-ui/themed' 
import { X } from 'phosphor-react-native'
import { Switchprops } from 'src/props/SwitchProps'
import { config } from '../../config/gluestack-ui.config'

export function Selected({isActive=true, text, onPress, ...props}: Switchprops) {
 
  return (
    <GluestackButton
      width="$24"
      height="$7"
      borderRadius="$full"
      flexDirection="row"
      backgroundColor={isActive ? '$blueLight' : '$gray5'}
      // justifyContent={isActive ? 'flex-start' : 'flex-end'}

      onPress={onPress}
      {...props}     
    >
      <Text
        color={isActive ? '$white' : '$gray3'}
        fontFamily="$karlaBold"
        fontSize="$sm" 
        textAlign="center"
        marginLeft="$2"
        marginRight="$2"  
      >
        {text}
      </Text>
      {isActive && <View backgroundColor='$white' width="$4" height="$4" borderRadius="$full" marginLeft="$1" alignItems="center" justifyContent="center">
        <X size={10} color={config.tokens.colors.blueLight}/>  
      </View>}

      
    </GluestackButton>
  )
}
