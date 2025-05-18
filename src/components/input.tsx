import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GluestackInput,
  InputField,
} from '@gluestack-ui/themed'

import { InputProps } from 'src/props/InputProps'

export function Input({placeholder, isReadOnly = false, variant = 'text', errorMessage = null,isInvalid = false,...props}: InputProps) {
  const invalid = !!errorMessage || isInvalid

  return (
    <GluestackInput
        isInvalid={isInvalid}
        backgroundColor="$gray7"
        w="$full"
        h={ variant == 'text' ? "$12" : "$40"}
        borderWidth="$0"
        borderRadius="$md"
        $focus={{
          borderWidth: 1,
          borderColor: invalid ? '$red500' : '$blueLight',
        }}
        $invalid={{
          borderWidth: 1,
          borderColor: '$red500',
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
      >
        <InputField
          textAlignVertical={variant == 'textarea' ? 'top' : 'center'}
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
    // <FormControl isInvalid={invalid} mb="$4" w="$full">
      

    //   <FormControlError>
    //     <FormControlErrorText color="$red500">
    //       {errorMessage}
    //     </FormControlErrorText>
    //   </FormControlError>
    // </FormControl>
  )
}
