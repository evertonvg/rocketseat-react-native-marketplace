import { View,} from '@gluestack-ui/themed'
import { containerProps } from 'src/props/ContainerProps'


export function Container({children}:containerProps) {
  return (
      <View 
        marginRight={'$6'} 
        marginLeft={'$6'}
        width={'auto'}
        flex={1}
        >
        
        {children}
    </View>
  )
}
