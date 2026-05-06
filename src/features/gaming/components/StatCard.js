import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

export default function StatCard({ number, label }) {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    flex: 1,
    padding: 18,
    borderRadius: 18,
    marginRight: 10,
  },

  number: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },

  label: {
    color: colors.muted,
    marginTop: 6,
  },
});