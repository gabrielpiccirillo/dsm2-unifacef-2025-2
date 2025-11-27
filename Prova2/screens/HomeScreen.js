import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda do dia</Text>
      <Text style={styles.subtitulo}>Gabriel Gregório Piccirillo{'\n'}6º Semestre de SI</Text>

      <View style={{ marginTop: 20 }}>
        <View style={styles.botao}>
          <Button 
            title="Meus compromissos" 
            onPress={() => navigation.navigate('MeusCompromissos')}
          />
        </View>

        <View style={styles.botao}>
          <Button 
            title="Compromissos da equipe" 
            onPress={() => navigation.navigate('CompromissosEquipe')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitulo: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  botao: {
    marginVertical: 10,
  },
});
