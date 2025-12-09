import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import compromissos from "../data/compSemana";

export default function CompSemana() {
  const [diaIndex, setDiaIndex] = useState(null);

  const opcoesDias = compromissos.map((item, index) => ({
    key: index,
    value: item.titulo,
  }));

  const diaObj = diaIndex !== null ? compromissos[diaIndex] : null;

  return (
    <View style={styles.container}>
      <Text style={styles.sub}>Gabriel Gregório Piccirillo</Text>
      <Text style={styles.sub}>6º Semestre de SI</Text>

      <SelectList
        setSelected={value => setDiaIndex(parseInt(value))}
        data={opcoesDias}
        placeholder="Selecione o dia"
        boxStyles={{ marginTop: 20 }}
      />

      {diaObj && (
        <View style={{ marginTop: 20 }}>
          <Text style={styles.tituloDia}>{diaObj.titulo}</Text>

          {diaObj.dados.map((texto, idx) => (
            <Text key={idx} style={styles.item}>
              {texto}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  sub: { textAlign: "center", marginBottom: 20, fontSize: 16 },
  tituloDia: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  item: { fontSize: 16, marginBottom: 6 },
});
