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

import UserProfile from "./components/Profile/UserProfile";


import Search from "./components/Search";
import authStore from "./stores/authStore";
import AddTrip from "./components/AddTrip";
import TripDetail from "./components/TripDetail";
import Test from "./components/Test";

import EditProfile from "./components/Profile/EditProfile";
import MyTrip from "./components/MyTrip";

import UpdateTrip from "./components/UpdateTrip";

const App = () => {
  return (
    // <Test />
    <>
      <NavigationContainer>
       
        </Stack.Navigator> */}

        <RootNavigator />
      </NavigationContainer>
    </>

  );
};

export default App;
