import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function SquadMember({
  username,
}) {
  return (
    <View style={styles.member}>

      <View style={styles.dot} />

      <Text style={styles.text}>
        {username}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  member: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,
  },

  dot: {
    width: 10,
    height: 10,

    borderRadius: 10,

    backgroundColor: '#22C55E',

    marginRight: 10,
  },

  text: {
    color: '#fff',
  },
});