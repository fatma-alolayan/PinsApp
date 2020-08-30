import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


import Icon from "react-native-vector-icons/Ionicons";
import DrawerContent from "../../components/DawerContenent";
import { View } from "native-base";
// compponent
import Home from "../Home";
import Start from "../authentication/Start";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import TripList from "../TripList";

import Profile from "../Profile";
import UserProfile from "../Profile/UserProfile";
import Search from "../Search";
import AddTrip from "../AddTrip";
import TripDetail from "../TripDetail";
import Intro from "./Intro";
import EditProfile from "../Profile/EditProfile";
import MyTrip from "../MyTrip";
import UpdateTrip from "../UpdateTrip";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
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

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "lightblue",
        height: 55,
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={TripList}
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
    <HomeStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerRight: () => (
          <Icon
            style={{ paddingRight: 10 }}
            name="md-arrow-back"
            size={25}
            color="#fff"
            onPress={() => navigation.goBack()}
          ></Icon>
        ),
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
    <HomeStack.Screen
      name="UserProfile"
      component={UserProfile}
      options={{
        headerRight: () => (
          <Icon
            style={{ paddingRight: 10 }}
            name="md-arrow-back"
            size={25}
            color="#fff"
            onPress={() => navigation.goBack()}
          ></Icon>
        ),
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
    <HomeStack.Screen
      name="Search"
      component={Search}
      options={{
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

    <HomeStack.Screen
      name="AddTrip"
      component={AddTrip}
      options={{
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

    <HomeStack.Screen
      name="TripDetail"
      component={TripDetail}
      options={{
        headerRight: () => (
          <Icon
            style={{ paddingRight: 10 }}
            name="md-arrow-back"
            size={25}
            color="#fff"
            onPress={() => navigation.goBack()}
          ></Icon>
        ),
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
    <HomeStack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
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
    <HomeStack.Screen
      name="MyTrip"
      component={MyTrip}
      options={{
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

    <HomeStack.Screen
      name="UpdateTrip"
      component={UpdateTrip}
      options={{
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
  </HomeStack.Navigator>
);

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
        <Intro />
      )}
    </>

   

  );
};
export default observer(RootNavigator);
