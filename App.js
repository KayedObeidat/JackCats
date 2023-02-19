import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/Home";
import AddCat from "./screens/AddCat";
import { initTableCats } from "./database/services/cats/InitTableCats";
import { getAllCats } from "./database/services/cats/GetAllCats";
import { useAtom } from "jotai";
import { atomCats } from "./globalStates/store";

const Stack = createStackNavigator()

export default function App() {

  const [, setCats] = useAtom(atomCats)

    useEffect(() => {
        getAllCats()
            .then((results) => setCats(results))
            .catch(error => console.log(error))
    })

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="AddCat" component={AddCat} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
