import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import SquadMember from './SquadMember';

import ChatBubble from './ChatBubble';

export default function SquadCard({
  squad,
}) {
  return (
    <View style={styles.card}>

      <View style={styles.header}>

        <View>

          <Text style={styles.name}>
            {squad.name}
          </Text>

          <Text style={styles.game}>
            {squad.game}
          </Text>

        </View>

        <View
          style={[
            styles.status,
            {
              backgroundColor: squad.online
                ? '#22C55E'
                : '#64748B',
            },
          ]}
        />

      </View>

      <Text style={styles.section}>
        MEMBERS
      </Text>

      {squad.members.map((member, index) => (
        <SquadMember
          key={index}
          username={member}
        />
      ))}

      <Text style={styles.section}>
        CHAT
      </Text>

      {squad.messages.map((message) => (
        <ChatBubble
          key={message.id}
          user={message.user}
          text={message.text}
        />
      ))}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Invite Player
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111827',

    borderRadius: 24,

    padding: 22,

    marginBottom: 24,

    borderWidth: 1,

    borderColor: '#1E293B',
  },

  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,
  },

  name: {
    color: '#fff',

    fontSize: 22,

    fontWeight: 'bold',
  },

  game: {
    color: '#94A3B8',

    marginTop: 5,
  },

  status: {
    width: 14,
    height: 14,

    borderRadius: 20,
  },

  section: {
    color: '#8B5CF6',

    fontSize: 13,

    fontWeight: 'bold',

    letterSpacing: 2,

    marginTop: 15,

    marginBottom: 12,
  },

  button: {
    backgroundColor: '#38BDF8',

    padding: 16,

    borderRadius: 16,

    marginTop: 18,

    alignItems: 'center',
  },

  buttonText: {
    color: '#000',

    fontWeight: 'bold',
  },
});