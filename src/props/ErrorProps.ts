import {
  InputField,
} from '@gluestack-ui/themed'
import { ComponentProps } from 'react'
export type ErrorProps = ComponentProps<typeof InputField> & {
  errorMessage?: string | null
  isInvalid?: boolean
  isReadOnly?: boolean
}