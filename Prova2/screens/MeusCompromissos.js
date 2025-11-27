import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dados = [
  { id: '1', hora: '09:30', texto: 'Reunião “Daily”' },
  { id: '2', hora: '14:00', texto: 'Reunião com cliente Carros & Carros' },
  { id: '3', hora: '16:30', texto: 'Prazo final Projeto X' },
];

export default function MeusCompromissos() {
  return (
    <View style={styles.container}>
      
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>(EU)</Text>
        <Text>Gabriel Gregório Piccirillo{'\n'}6º Semestre de SI</Text>
      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.hora} - {item.texto}
          </Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cabecalho: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    marginVertical: 8,
  },
});
