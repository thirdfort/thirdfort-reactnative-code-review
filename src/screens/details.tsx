import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';

export type DetailsScreenProps = {
  message?: string;
};

export function DetailsScreen({message = "Details Screen"}: DetailsScreenProps) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{message}</Text>
      <Button onPress={() => navigation.push('Details')}>Go Deeper</Button>
      <Button onPress={() => navigation.goBack('Details')}>Go Back</Button>
      <Button onPress={() => navigation.popTo('Home')}>Go Home</Button>
    </View>
  );
}