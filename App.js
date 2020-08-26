import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//components
import Home from "./components/Home";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import TripList from "./components/TripList";
import Profile from "./components/Profile";
import Search from "./components/Search";
import authStore from "./stores/authStore";
import AddTrip from "./components/AddTrip";
import TripDetail from "./components/TripDetail";
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TripList" component={TripList} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Tab.Screen name="Intro" component={Home} />
        <Stack.Screen name="Home" component={HomeTabs} />
        {/* <Stack.Screen name="TripList" component={TripList} /> */}
        <Tab.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="AddTrip" component={AddTrip} />
        <Stack.Screen name="TripDetail" component={TripDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
