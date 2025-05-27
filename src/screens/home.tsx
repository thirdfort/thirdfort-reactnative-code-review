import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';

export type HomeScreenProps = {
  message?: string;
};

export function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { message } = route.params as HomeScreenProps;
  
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button style={styles.bottom} onPress={() => navigation.push('About')}>Go to Details</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    alignSelf: 'flex-end',
  }
});