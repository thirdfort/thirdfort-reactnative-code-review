import { StyleSheet, Text } from "react-native";
import { typography } from "../../styles";

type StatusTextProps = {
  status: string;
}

export function StatusText({status}: StatusTextProps) {
  const additionalStyles = (status === 'assigned' ? styles.red : styles.green);
  return (
    <Text style={[styles.status, additionalStyles]}>{status}</Text>
  )
}

const styles = StyleSheet.create({
  status: {
    ...typography.paragraph,
    paddingTop: 5,
    color: '#5A5A5A'
  },
  red: {
    color: 'red'
  },
  green: {
    color: 'green'
  },
});