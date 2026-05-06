import { View, Text, StyleSheet } from 'react-native';

export default function SquadsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👥 Your Squads</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1120',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});