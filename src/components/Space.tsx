import { View } from '@gluestack-ui/themed'

type SpaceProps = {
  space: number;
};

export function Space({ space }: SpaceProps) {
  return (
    <View flex={1} bg="$gray7" height={space} backgroundColor='transparent'>
    </View>
  )
}
