import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.logo}>🎮 GamerHub</Text>

      <View style={styles.card}>
        <Text style={styles.title}>🔥 Active Matches</Text>
        <Text style={styles.subtitle}>CS2 Ranked - 4/5 players</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🏆 Tournament</Text>
        <Text style={styles.subtitle}>FIFA Cup starts in 20 min</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1120',
    padding: 20,
  },

  logo: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#151E2E',
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#94A3B8',
    marginTop: 8,
  },
});