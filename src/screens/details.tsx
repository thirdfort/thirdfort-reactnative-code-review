import { View, Text } from 'react-native';

export type DetailsScreenProps = {
  message?: string;
};

export function DetailsScreen({message = "Details Screen"}: DetailsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{message}</Text>
    </View>
  );
}