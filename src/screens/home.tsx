import { View, Text } from 'react-native';

export type HomeScreenProps = {
  message?: string;
};

export function HomeScreen({message = "Home Screen"}: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{message}</Text>
    </View>
  );
}