import { View,} from '@gluestack-ui/themed'
import { containerProps } from 'src/props/ContainerProps'
  
export function SmallContainer({children}:containerProps) {
  return (
      <View
        marginRight={'$12'} 
        marginLeft={'$12'}
        width={'auto'}
        flex={1}
        >
        
        {children}
      </View>
  )
}
