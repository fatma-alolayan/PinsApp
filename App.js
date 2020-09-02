import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//components
import RootNavigator from "./components/Navigation";
import BottomSheetList from "./components/BottomSheetList";
const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    // <BottomSheetList />
  );
};

export default App;
