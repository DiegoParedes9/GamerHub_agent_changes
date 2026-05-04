import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';
import ButtonPrimary from '../components/ButtonPrimary';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>JugadorPro123</Text>
      <Text style={styles.info}>Nivel: Avanzado</Text>
      <Text style={styles.info}>Juego principal: CS2</Text>

      <ButtonPrimary title="Editar perfil" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  name: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    color: colors.textSecondary,
    marginBottom: 6,
  },
});