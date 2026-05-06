import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

export default function GameCard({ game }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.players}>{game.players}</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.ping}>{game.ping}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },

  players: {
    color: colors.muted,
    marginTop: 6,
  },

  badge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },

  ping: {
    color: '#000',
    fontWeight: 'bold',
  },
});