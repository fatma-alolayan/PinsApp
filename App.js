import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//components
import RootNavigator from "./components/Navigation/RootNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
