import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const COLORS = {
  card: '#111827',

  neonPurple: '#8B5CF6',

  text: '#FFFFFF',

  border: '#1E293B',
};

export default function FavoriteGameCard({
  game,
}) {
  return (
    <View style={styles.card}>

      <Text style={styles.game}>
        {game}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,

    padding: 18,

    borderRadius: 18,

    marginBottom: 15,

    borderWidth: 1,

    borderColor: COLORS.border,
  },

  game: {
    color: COLORS.neonPurple,

    fontSize: 16,

    fontWeight: 'bold',
  },
});