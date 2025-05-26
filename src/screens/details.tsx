import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';

export type DetailsScreenProps = {
  depth: number;
};

export function DetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { depth } = route.params as DetailsScreenProps;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>You are currently {depth} screens deep</Text>
      <Button onPress={() => navigation.setParams({depth: (depth + 1)})}>Increment Depth</Button>
      <Button onPress={() => navigation.push('Details', {depth: (depth + 1)})}>Go Deeper</Button>
      <Button onPress={() => navigation.goBack('Details')}>Go Back</Button>
      <Button onPress={() => navigation.popTo('Home')}>Go Home</Button>
    </View>
  );
}