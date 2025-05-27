import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';

export type AboutScreenProps = {
  depth: number;
};

export function AboutScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { depth } = route.params as AboutScreenProps;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>You are currently {depth} screens deep</Text>
      <Button onPress={() => navigation.popTo('Home')}>Go Home</Button>
    </View>
  );
}