import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';

export type AboutScreenProps = {
};

export function AboutScreen() {
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.popTo('Home');
  };

  return (
    <>
      <View style={styles.container}>
        <Text>ACME Mission Manager</Text>
        <Text>v0.0.1 (build 13)</Text>
        <Text>© 2025 ACME Industries LTD</Text>
      </View>
      <View style={styles.footer}>
        <Button onPress={handleGoHome}>Home</Button>
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