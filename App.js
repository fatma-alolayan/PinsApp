import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
