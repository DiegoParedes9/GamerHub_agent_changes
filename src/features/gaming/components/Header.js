import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>🎮 GamerHub</Text>
        <Text style={styles.subtitle}>Find your squad</Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>DP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    color: colors.text,
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    color: colors.muted,
    marginTop: 4,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontWeight: 'bold',
    color: '#000',
  },
});