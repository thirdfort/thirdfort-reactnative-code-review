import { Text, View, StyleSheet} from "react-native";
import { typography } from "../../styles";
import { StatusText } from "./status";

type MissionCardProps = {
  name: string;
  description: string;
  status: string;
  isTopSecret: boolean;
}

export function MissionCard({name, description, status} : MissionCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <StatusText status={status}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: 500 as unknown as '500',
  },
  description: {
    ...typography.paragraph,
    paddingTop: 10
  },
  status: {
    ...typography.paragraph,
    paddingTop: 5,
    color: '#5A5A5A'
  },
});