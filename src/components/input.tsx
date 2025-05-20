import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GluestackInput,
  Button as GluestackButton,
  InputField,
  View,
} from '@gluestack-ui/themed'
import { Eye, EyeSlash } from 'phosphor-react-native'

import { config } from '../../config/gluestack-ui.config'
import { InputProps } from 'src/props/InputProps'
import { useState } from 'react'

export function Input({placeholder, isReadOnly = false, variant = 'text',  errorMessage = null,isInvalid = false, secureTextEntry, ...props}: InputProps) {
  const invalid = !!errorMessage || isInvalid

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry)

  const handleChangeVisibility = () => {
    setIsSecureTextEntry(!isSecureTextEntry)
  }
  return (
    <View position='relative' zIndex={1}>
    <FormControl isInvalid={invalid} mb="$4" w="$full">
      <GluestackInput
          isInvalid={isInvalid}
          backgroundColor="$gray7"
          w="$full"
          h={ variant == 'text' ? "$12" : "$40"}
          borderWidth="$0"
          borderRadius="$md"
          $focus={{
            borderWidth: 1,
            borderColor: invalid ? '$redLight' : '$blueLight',
          }}
          $invalid={{
            borderWidth: 1,
            borderColor: '$redLight',
          }}
          isReadOnly={isReadOnly}
          opacity={isReadOnly ? 0.5 : 1}
          >
          <InputField
            textAlignVertical={variant == 'textarea' ? 'top' : 'center'}
            secureTextEntry={isSecureTextEntry}
            px="$4"
            bg="$gray7"
            color="$gray2"
            fontFamily="$body"
            padding={'$4'}
            placeholder={placeholder}
            placeholderTextColor="$gray4"
            {...props}
            />
      </GluestackInput>
      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
    {secureTextEntry && 
      <GluestackButton backgroundColor='transparent' position='absolute' right="$0" top="$1" zIndex={2} onPress={handleChangeVisibility}>
        {isSecureTextEntry ? <EyeSlash color={config.tokens.colors.gray3 }/> :<Eye color={config.tokens.colors.gray3 }/> }
      </GluestackButton>
    }
    </View>

      

      

  )
}
