import {
  InputField,
} from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

export type InputProps = ComponentProps<typeof InputField> & {
  errorMessage?: string | null
  isInvalid?: boolean
  isReadOnly?: boolean
  variant?: 'text' | 'password' | 'textarea'
}