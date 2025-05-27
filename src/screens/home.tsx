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
    <>
      <View style={styles.container}>
        <Text>{message}</Text>
      </View>
      <View style={styles.footer}>
          <Button onPress={() => navigation.push('About')}>About</Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 10,
  }
});