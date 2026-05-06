
const COLORS = {
  background: '#070B14',

  card: '#111827',

  neonBlue: '#38BDF8',
  neonPurple: '#8B5CF6',

  text: '#FFFFFF',
  muted: '#94A3B8',

  border: '#1E293B',
};import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';



export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View>
          <Text style={styles.logo}>
            GamerHub
          </Text>

          <Text style={styles.subtitle}>
            Find your squad.
          </Text>
        </View>

        <View style={styles.profileGlow}>
          <Text style={styles.profileText}>
            DP
          </Text>
        </View>

      </View>

      <Text style={styles.sectionTitle}>
        LIVE MATCHES
      </Text>

      <View style={styles.card}>

        <View>
          <Text style={styles.cardTitle}>
            Counter Strike 2
          </Text>

          <Text style={styles.cardSubtitle}>
            Ranked Squad • 4/5 Players
          </Text>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            18ms
          </Text>
        </View>

      </View>

      <View style={styles.card}>

        <View>
          <Text style={styles.cardTitle}>
            FIFA Tournament
          </Text>

          <Text style={styles.cardSubtitle}>
            Starts in 20 minutes
          </Text>
        </View>

        <View style={styles.purpleBadge}>
          <Text style={styles.badgeText}>
            LIVE
          </Text>
        </View>

      </View>

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
    marginTop: 60,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 40,
  },

  logo: {
    color: COLORS.text,

    fontSize: 34,

    fontWeight: 'bold',
  },

  subtitle: {
    color: COLORS.muted,

    marginTop: 5,
  },

  profileGlow: {
    width: 55,
    height: 55,

    borderRadius: 30,

    backgroundColor: COLORS.neonBlue,

    justifyContent: 'center',

    alignItems: 'center',

    shadowColor: COLORS.neonBlue,

    shadowOpacity: 0.8,

    shadowRadius: 12,
  },

  profileText: {
    color: '#000',

    fontWeight: 'bold',

    fontSize: 18,
  },

  sectionTitle: {
    color: COLORS.neonBlue,

    fontSize: 14,

    fontWeight: 'bold',

    letterSpacing: 2,

    marginBottom: 20,
  },

  card: {
    backgroundColor: COLORS.card,

    borderRadius: 24,

    padding: 22,

    marginBottom: 18,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: COLORS.border,
  },

  cardTitle: {
    color: COLORS.text,

    fontSize: 18,

    fontWeight: 'bold',
  },

  cardSubtitle: {
    color: COLORS.muted,

    marginTop: 8,
  },

  badge: {
    backgroundColor: COLORS.neonBlue,

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderRadius: 14,
  },

  purpleBadge: {
    backgroundColor: COLORS.neonPurple,

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderRadius: 14,
  },

  badgeText: {
    color: '#fff',

    fontWeight: 'bold',
  },
});