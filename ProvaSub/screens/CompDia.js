import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import compromissos from "../data/compDia";

export default function CompDia() {
  const [selecionado, setSelecionado] = useState("");

  const itens = compromissos.map(item => ({
    key: item.id,
    value: item.descr,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>11/11 (ter)</Text>
      <Text style={styles.sub}>Gabriel Gregório Piccirillo</Text>
      <Text style={styles.sub}>6º Semestre de SI</Text>

      <SelectList
        setSelected={setSelecionado}
        data={itens}
        placeholder="Selecione um compromisso"
        boxStyles={{ marginTop: 20 }}
      />

      {selecionado !== "" && (
        <Text style={styles.resultado}>Selecionado: {selecionado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  sub: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
  },
});
