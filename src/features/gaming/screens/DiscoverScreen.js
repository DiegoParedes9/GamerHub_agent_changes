import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

import { gamers } from '../data/gamers';

import GamerCard from '../components/GamerCard';

const COLORS = {
  background: '#070B14',

  card: '#111827',

  neonBlue: '#38BDF8',

  neonPurple: '#8B5CF6',

  text: '#FFFFFF',

  muted: '#94A3B8',

  border: '#1E293B',
};

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Discover Players
      </Text>

      <Text style={styles.subtitle}>
        Find teammates and competitive squads
      </Text>

      <TextInput
        placeholder="Search gamers..."
        placeholderTextColor="#64748B"
        style={styles.searchInput}
      />

      <View style={styles.filterRow}>

        <View style={styles.filterBadge}>
          <Text style={styles.filterText}>
            FPS
          </Text>
        </View>

        <View style={styles.filterBadge}>
          <Text style={styles.filterText}>
            Ranked
          </Text>
        </View>

        <View style={styles.filterBadge}>
          <Text style={styles.filterText}>
            LATAM
          </Text>
        </View>

      </View>

      <Text style={styles.sectionTitle}>
        TOP PLAYERS
      </Text>

      {gamers.map((gamer) => (
        <GamerCard
          key={gamer.id}
          gamer={gamer}
        />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.background,

    paddingHorizontal: 20,
  },

  title: {
    color: COLORS.text,

    fontSize: 34,

    fontWeight: 'bold',

    marginTop: 60,
  },

  subtitle: {
    color: COLORS.muted,

    marginTop: 8,

    marginBottom: 30,
  },

  searchInput: {
    backgroundColor: COLORS.card,

    borderRadius: 18,

    padding: 18,

    color: '#fff',

    borderWidth: 1,

    borderColor: COLORS.border,

    marginBottom: 20,
  },

  filterRow: {
    flexDirection: 'row',

    marginBottom: 30,
  },

  filterBadge: {
    backgroundColor: COLORS.card,

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderRadius: 14,

    marginRight: 10,

    borderWidth: 1,

    borderColor: COLORS.border,
  },

  filterText: {
    color: COLORS.neonBlue,

    fontWeight: 'bold',
  },

  sectionTitle: {
    color: COLORS.neonPurple,

    fontSize: 14,

    fontWeight: 'bold',

    letterSpacing: 2,

    marginBottom: 20,
  },
});