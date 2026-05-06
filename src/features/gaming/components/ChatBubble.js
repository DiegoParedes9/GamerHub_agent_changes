import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ChatBubble({
  user,
  text,
}) {
  return (
    <View style={styles.bubble}>

      <Text style={styles.user}>
        {user}
      </Text>

      <Text style={styles.message}>
        {text}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: '#1E293B',

    padding: 14,

    borderRadius: 14,

    marginBottom: 10,
  },

  user: {
    color: '#38BDF8',

    fontWeight: 'bold',

    marginBottom: 4,
  },

  message: {
    color: '#fff',
  },
});