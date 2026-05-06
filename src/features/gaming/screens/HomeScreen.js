import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';
import GameCard from '../components/GameCard';
import StatCard from '../components/StatCard';

import { colors } from '../styles/theme';
import { activeGames } from '../data/mockData';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <Header />

      <View style={styles.statsRow}>
        <StatCard number="124" label="Online" />
        <StatCard number="32" label="Squads" />
      </View>

      <Text style={styles.sectionTitle}>
        🔥 Active Matches
      </Text>

      {activeGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 18,
  },

  statsRow: {
    flexDirection: 'row',
    marginBottom: 25,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});