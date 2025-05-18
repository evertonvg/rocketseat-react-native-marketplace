// import {Button as GluestackButton} from '@gluestack-ui/themed' 
// import { ComponentProps } from 'react'

// export type buttonProps = ComponentProps<typeof GluestackButton> & {
//   title: string;
//   variant?: "blue" | "black" | "ghost";
//   isLoading?: boolean;
// }

export interface buttonProps {
  title: string;
  icon?: 'pencil' | 'plus' | 'whatsapp' | 'trash' | 'power' | 'tag';
  isLoading?: boolean;
  variant?: 'blue' | 'black' | 'gray';
}