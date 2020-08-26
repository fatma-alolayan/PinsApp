import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

//components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import TripList from "../TripList";

import TripItem from "../TripList/TripItem";


import Profile from "../Profile";
import Search from "../Search";
import TabContent from "../TabContent";
import Intro from "./Intro";
import authStore from "../../stores/authStore";

const { Navigator, Screen } = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const HomeStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerTintColor: "#fff",
//       headerStyle: {
//         backgroundColor: "lightblue",
//       },
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <HomeStack.Screen name="TripList" component={TripList} />
//     <HomeStack.Screen name="Search" component={Search} />
//     <HomeStack.Screen name="Profile" component={Profile} />
//     <HomeStack.Screen name="Signin" component={Signin} />
//     <HomeStack.Screen name="Signup" component={Signup} />
//   </HomeStack.Navigator>
// );

const RootNavigator = () => {
  return (

    
    <Tab.Navigator
      initialRouteName="Home"

      screenOptions={{
        headerTintColor: "lightblue",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >

//      

//       <Screen
//         name="Signin"
//         component={Signin}
//         options={{ headerShown: false }}
//       />
//       <Screen
//         name="Signup"
//         component={Signup}
//         options={{ headerShown: false }}
//       />

//       <Screen name="TripList" component={TripList} />
//       <Screen name="TripItem" component={TripItem} />
   

      <Tab.Screen name="Home" component={TripList} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>

  );
};

export default RootNavigator;
