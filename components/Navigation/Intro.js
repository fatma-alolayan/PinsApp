import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Start from "../authentication/Start";

const RootStack = createStackNavigator();
// this file should be index.js
const Intro = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Start" component={Start} />
    <RootStack.Screen name="Signin" component={Signin} />
    <RootStack.Screen name="Signup" component={Signup} />
  </RootStack.Navigator>
);

export default Intro;
