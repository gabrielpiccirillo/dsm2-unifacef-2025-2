import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import CompDia from "./screens/CompDia";
import CompSemana from "./screens/CompSemana";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Início" component={Home} />

        <Stack.Screen
          name="Compromissos do Dia"
          component={CompDia}
        />

        <Stack.Screen
          name="Compromissos da Semana"
          component={CompSemana}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
