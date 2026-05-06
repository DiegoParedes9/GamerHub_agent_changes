import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const COLORS = {
  background: '#070B14',

  card: '#111827',

  neonBlue: '#38BDF8',

  neonPurple: '#8B5CF6',

  text: '#FFFFFF',

  muted: '#94A3B8',

  border: '#1E293B',
};

export default function GamerCard({ gamer }) {
  return (
    <View style={styles.card}>

      <View style={styles.leftSection}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {gamer.username.charAt(0)}
          </Text>
        </View>

        <View>

          <Text style={styles.username}>
            {gamer.username}
          </Text>

          <Text style={styles.game}>
            {gamer.game}
          </Text>

          <Text style={styles.rank}>
            {gamer.rank}
          </Text>

        </View>

      </View>

      <View style={styles.rightSection}>

        <View
          style={[
            styles.statusDot,
            {
              backgroundColor: gamer.online
                ? '#22C55E'
                : '#64748B',
            },
          ]}
        />

        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinText}>
            Join Squad
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,

    borderRadius: 24,

    padding: 20,

    marginBottom: 18,

    borderWidth: 1,

    borderColor: COLORS.border,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  avatar: {
    width: 60,
    height: 60,

    borderRadius: 30,

    backgroundColor: COLORS.neonPurple,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 15,
  },

  avatarText: {
    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',
  },

  username: {
    color: COLORS.text,

    fontSize: 18,

    fontWeight: 'bold',
  },

  game: {
    color: COLORS.muted,

    marginTop: 4,
  },

  rank: {
    color: COLORS.neonBlue,

    marginTop: 4,

    fontWeight: 'bold',
  },

  rightSection: {
    alignItems: 'center',
  },

  statusDot: {
    width: 12,
    height: 12,

    borderRadius: 10,

    marginBottom: 12,
  },

  joinButton: {
    backgroundColor: COLORS.neonBlue,

    paddingHorizontal: 14,

    paddingVertical: 10,

    borderRadius: 12,
  },

  joinText: {
    color: '#000',

    fontWeight: 'bold',
  },
});