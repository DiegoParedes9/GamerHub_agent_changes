import { Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

export default function Header({ title }) {
  return <Text style={styles.header}>{title}</Text>;
}

const styles = StyleSheet.create({
  header: {
    color: colors.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});