import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

import Icon from "react-native-vector-icons/Ionicons";

// component

import Search from "../Search";

const SearchStack = createStackNavigator();
const SearchStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
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
    <SearchStack.Screen
      name="Search"
      component={Search}
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
  </SearchStack.Navigator>
);
export default observer(SearchStackScreen);
