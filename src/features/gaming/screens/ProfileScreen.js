import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { profile } from '../data/profile';

import StatBox from '../components/StatBox';

import FavoriteGameCard from '../components/FavoriteGameCard';

const COLORS = {
  background: '#070B14',

  card: '#111827',

  neonBlue: '#38BDF8',

  neonPurple: '#8B5CF6',

  text: '#FFFFFF',

  muted: '#94A3B8',

  border: '#1E293B',
};

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            D
          </Text>
        </View>

        <View style={styles.onlineDot} />

      </View>

      <Text style={styles.username}>
        {profile.username}
      </Text>

      <Text style={styles.bio}>
        {profile.bio}
      </Text>

      <View style={styles.rankBadge}>
        <Text style={styles.rankText}>
          {profile.rank}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        STATISTICS
      </Text>

      <View style={styles.statsRow}>

        <StatBox
          number={profile.stats.wins}
          label="Wins"
        />

        <StatBox
          number={profile.stats.squads}
          label="Squads"
        />

        <StatBox
          number={profile.stats.tournaments}
          label="Tournaments"
        />

      </View>

      <Text style={styles.sectionTitle}>
        FAVORITE GAMES
      </Text>

      {profile.favoriteGames.map((game, index) => (
        <FavoriteGameCard
          key={index}
          game={game}
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

  header: {
    alignItems: 'center',

    marginTop: 60,
  },

  avatar: {
    width: 120,
    height: 120,

    borderRadius: 60,

    backgroundColor: COLORS.neonPurple,

    justifyContent: 'center',

    alignItems: 'center',

    shadowColor: COLORS.neonPurple,

    shadowOpacity: 0.8,

    shadowRadius: 20,
  },

  avatarText: {
    color: '#fff',

    fontSize: 42,

    fontWeight: 'bold',
  },

  onlineDot: {
    width: 18,
    height: 18,

    borderRadius: 20,

    backgroundColor: '#22C55E',

    position: 'absolute',

    bottom: 5,

    right: 120,
  },

  username: {
    color: COLORS.text,

    fontSize: 32,

    fontWeight: 'bold',

    textAlign: 'center',

    marginTop: 20,
  },

  bio: {
    color: COLORS.muted,

    textAlign: 'center',

    marginTop: 10,

    lineHeight: 22,
  },

  rankBadge: {
    backgroundColor: COLORS.neonBlue,

    alignSelf: 'center',

    paddingHorizontal: 18,

    paddingVertical: 10,

    borderRadius: 16,

    marginTop: 20,

    marginBottom: 35,
  },

  rankText: {
    color: '#000',

    fontWeight: 'bold',
  },

  sectionTitle: {
    color: COLORS.neonPurple,

    fontSize: 14,

    fontWeight: 'bold',

    letterSpacing: 2,

    marginBottom: 18,
  },

  statsRow: {
    flexDirection: 'row',

    marginBottom: 35,
  },
});