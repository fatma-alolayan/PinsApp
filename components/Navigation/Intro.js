import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Home from "../Home";

const RootStack = createStackNavigator();

const Intro = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Home" component={Home} />
    <RootStack.Screen name="Signin" component={Signin} />
    <RootStack.Screen name="Signup" component={Signup} />
  </RootStack.Navigator>
);

export default Intro;
