import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  useTheme,
  Title,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import { Button, Thumbnail } from "native-base";
import pic from "../../media/user.png";

const DrawerContent = ({ navigation }) => {
  user = authStore.user;

  return (
    <>
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView>
          <View style={styles.drawerContent}>
            <Drawer.Section style={styles.drawerSection}>
              <View style={styles.userInfoSection}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  {user.image ? (
                    <Thumbnail
                      onPress={() => navigation.navigate("EditProfile", user)}
                      source={{ uri: user.image }}
                    />
                  ) : (
                    <Thumbnail source={pic} />
                  )}

                  <View style={{ flexDirection: "column", marginLeft: 15 }}>
                    <Title style={styles.title}>{user.username}</Title>
                  </View>
                </View>
              </View>
            </Drawer.Section>

            {/* <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={() => <Icon name="home-outline" color="grey" size="25" />}
                label="Home"
                onPress={() => {
                  navigation.navigate("TripList");
                }}
              />
            </Drawer.Section> */}
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={() => (
                  <Icon name="account-outline" color="grey" size="25" />
                )}
                label="Profile"
                onPress={() => {
                  navigation.navigate("EditProfile");
                }}
              />
            </Drawer.Section>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={() => (
                  <Icon
                    name="account-multiple-outline"
                    color="grey"
                    size="25"
                  />
                )}
                label="Groups"
                onPress={() => {
                  // navigation.navigate("Group");
                }}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>

        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={() => <Icon name="exit-to-app" size="25" />}
            label="Sign Out"
            onPress={() => {
              authStore.signout();
            }}
          />
        </Drawer.Section>
      </View>
    </>
  );
};
export default observer(DrawerContent);
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    color: "blue",
  },

  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  signin: {
    flexDirection: "row",
    marginTop: 15,
    fontWeight: "bold",
    color: "blue",
  },
});
