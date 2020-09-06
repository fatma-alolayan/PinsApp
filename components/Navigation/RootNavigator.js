import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { observer } from "mobx-react";

import Icon from "react-native-vector-icons/Ionicons";

// component
import DrawerContent from "../DrawerContent";

import Navigation from "./index";
import authStore from "../../stores/authStore";
import HomeStackScreen from "./HomeStackScreen";
import SearchStackScreen from "./SearchStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="white"
    backgroundColor="lightblue"
    barStyle={{ backgroundColor: "lightblue" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        backgroundColor: "lightblue",
        tabBarLabel: "Home",
        tabBarColor: "lightblue",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: "Search",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

const RootNavigator = () => {
  return (
    <>
      {authStore.user ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="HomeTab" component={TabScreen} />
        </Drawer.Navigator>
      ) : (
        <Navigation />
      )}
    </>
  );
};
export default observer(RootNavigator);
