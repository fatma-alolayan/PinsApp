import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import TripList from "../TripList";
import Profile from "../Profile";
import Search from "../Search";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />

      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="TripList"
        component={TripList}
        options={{ headerShown: false }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
