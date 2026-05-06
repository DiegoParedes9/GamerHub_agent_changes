import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const COLORS = {
  card: '#111827',

  neonBlue: '#38BDF8',

  text: '#FFFFFF',

  muted: '#94A3B8',

  border: '#1E293B',
};

export default function StatBox({
  number,
  label,
}) {
  return (
    <View style={styles.card}>

      <Text style={styles.number}>
        {number}
      </Text>

      <Text style={styles.label}>
        {label}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,

    backgroundColor: COLORS.card,

    borderRadius: 18,

    padding: 20,

    marginRight: 10,

    borderWidth: 1,

    borderColor: COLORS.border,
  },

  number: {
    color: COLORS.neonBlue,

    fontSize: 24,

    fontWeight: 'bold',
  },

  label: {
    color: COLORS.muted,

    marginTop: 8,
  },
});