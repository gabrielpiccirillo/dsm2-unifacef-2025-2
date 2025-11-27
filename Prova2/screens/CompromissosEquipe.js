import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const equipe = [
  {
    id: 'eu',
    nome: '(EU)',
    sub: 'Gabriel Gregório Piccirillo\n6º Semestre de SI',
    compromissos: [
      '09:30 - Reunião “Daily”',
      '14:00 - Reunião com cliente Carros & Carros',
      '16:30 - Prazo final Projeto X',
    ],
  },
  {
    id: 'jurema',
    nome: 'Jurema (chefe)',
    compromissos: [
      '09:30 - Reunião “Daily”',
      '12:00 - Almoço com a diretoria',
      '15:00 - Saída viagem',
    ],
  },
  {
    id: 'aderbal',
    nome: 'Aderbal',
    compromissos: [
      '09:30 - Reunião “Daily”',
      '13:30 - Visita técnica Uni-FACEF',
      '16:30 - Prazo final Projeto X',
    ],
  },
];

export default function CompromissosEquipe() {
  return (
    <View style={styles.container}>
      <FlatList
        data={equipe}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bloco}>

            <Text style={styles.nome}>{item.nome}</Text>
            {item.sub && <Text>{item.sub}</Text>}

            {item.compromissos.map((c, i) => (
              <Text style={styles.item} key={i}>{c}</Text>
            ))}

          </View>
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
  bloco: {
    marginBottom: 30,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    marginVertical: 6,
  },
});
