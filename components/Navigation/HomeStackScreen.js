import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

import Icon from "react-native-vector-icons/Ionicons";

// component
import DrawerContent from "../DrawerContent";
import TripList from "../TripList";
import Profile from "../Profile";
import Search from "../Search";
import AddTrip from "../AddTrip";
import TripDetail from "../TripDetail";
import EditProfile from "../Profile/EditProfile";
import UpdateTrip from "../UpdateTrip";
import AddList from "../MyList/AddList";
import MyListItemDetails from "../MyList/MyListItemDetails";
import EditList from "../MyList/EditList";

const HomeStack = createStackNavigator();

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
        title: false,

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
        title: false,
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
        title: false,
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
        title: false,
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
        title: false,
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
        title: false,
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
        title: false,
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
      name="AddList"
      component={AddList}
      options={{
        title: false,
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
      name="MyListItemDetails"
      component={MyListItemDetails}
      options={{
        title: false,

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
      name="EditList"
      component={EditList}
      options={{
        title: false,

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

export default observer(HomeStackScreen);
