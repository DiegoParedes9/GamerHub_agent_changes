import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { squads } from '../data/squads';

import SquadCard from '../components/SquadCard';

export default function SquadsScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View>

          <Text style={styles.title}>
            Squads
          </Text>

          <Text style={styles.subtitle}>
            Manage your gaming teams
          </Text>

        </View>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createText}>
            +
          </Text>
        </TouchableOpacity>

      </View>

      {squads.map((squad) => (
        <SquadCard
          key={squad.id}
          squad={squad}
        />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#070B14',

    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 30,
  },

  title: {
    color: '#fff',

    fontSize: 34,

    fontWeight: 'bold',
  },

  subtitle: {
    color: '#94A3B8',

    marginTop: 6,
  },

  createButton: {
    width: 55,
    height: 55,

    borderRadius: 30,

    backgroundColor: '#8B5CF6',

    justifyContent: 'center',

    alignItems: 'center',

    shadowColor: '#8B5CF6',

    shadowOpacity: 0.8,

    shadowRadius: 12,
  },

  createText: {
    color: '#fff',

    fontSize: 30,

    fontWeight: 'bold',
  },
});