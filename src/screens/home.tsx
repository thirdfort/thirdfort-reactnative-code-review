import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { Button } from '@react-navigation/elements';
import { typography } from '../../styles';
import { useEffect, useState } from 'react';
import { MissionCard } from '../components/mission';

export type HomeScreenProps = {
};

export type Mission = {
  id: string;
  name: string;
  description: string;
  isTopSecret: boolean;
  status: string
};

export function HomeScreen() {
  const navigation = useNavigation();

  const handleGoToAbout = () => {
    navigation.navigate('About');
  };
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Mission[]>([]);

  const getMissions = async () => {
    try {
      const response = await fetch('https://dummyjson.com/c/7d66-5cf8-41e6-b225');
      const json = await response.json();
      setData(json.missions);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMissions();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>ACME Mission Manager</Text>
      </View>
      <ScrollView style={styles.content}>
        {isLoading ?
          (<View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color='#1C70ED' />
          </View>) : 
          <FlatList
            style={styles.list}
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <MissionCard {...item} />
            )}
          />
        }
      </ScrollView>
      <View style={styles.footer}>
          <Button onPress={handleGoToAbout}>About</Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    padding: 20
  },
  content: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    ...typography.title,
  },
  description: {
    ...typography.paragraph,
    paddingTop: 20
  },
});