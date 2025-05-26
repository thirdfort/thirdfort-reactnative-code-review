import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';

export type HomeScreenProps = {
  message?: string;
};

export function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { message } = route.params as HomeScreenProps;
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{message}</Text>
      <Button onPress={() => navigation.push('Details')}>Go to Details</Button>
    </View>
  );
}