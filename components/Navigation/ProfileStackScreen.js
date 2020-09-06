import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

import Icon from "react-native-vector-icons/Ionicons";

// component
import Profile from "../Profile";

const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "lightblue",
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: "",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="lightblue"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

export default observer(ProfileStackScreen);
