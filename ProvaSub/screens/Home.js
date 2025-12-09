import { View, Text, Button, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda</Text>

      <Text style={styles.sub}>Gabriel Gregório Piccirillo</Text>
      <Text style={styles.sub}>6º Semestre de SI</Text>

      <View style={{ marginTop: 30 }}>
        <Button
          title="COMPROMISSOS DO DIA"
          onPress={() => navigation.navigate("Compromissos do Dia")}
        />

        <View style={{ marginTop: 20 }} />

        <Button
          title="COMPROMISSOS DA SEMANA"
          onPress={() => navigation.navigate("Compromissos da Semana")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sub: {
    fontSize: 16,
  },
});
