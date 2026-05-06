const COLORS = {
  background: '#070B14',

  card: '#111827',

  neonBlue: '#38BDF8',
  neonPurple: '#8B5CF6',

  text: '#FFFFFF',
  muted: '#94A3B8',

  border: '#1E293B',
};
import { View, Text, StyleSheet } from 'react-native';



export default function SquadsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        👥 Your Squads
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.background,

    justifyContent: 'center',

    alignItems: 'center',
  },

  text: {
    color: COLORS.text,

    fontSize: 26,

    fontWeight: 'bold',
  },
});