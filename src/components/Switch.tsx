import {
  Button as GluestackButton,
  View,
} from '@gluestack-ui/themed' 
import { Switchprops } from 'src/props/SwitchProps'


export function Switch({isActive=true, onPress, ...props}: Switchprops) {
 
  return (
    <GluestackButton
      sx={{
        padding: 2,
      }}
      width="$12"
      height="$7"
      padding="$0.5"
      borderRadius="$full"
      onPress={onPress}
      backgroundColor={isActive ? '$blueLight' : '$gray5'}
      flexDirection="row"
      justifyContent={isActive ? 'flex-start' : 'flex-end'}
      {...props}     
    >
      <View backgroundColor='$white' width="$6" height="$6" borderRadius="$full"></View>
    </GluestackButton>
  )
}
