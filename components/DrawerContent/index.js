import React, { useState } from "react";
import { observer } from "mobx-react";

// styles
import { Title, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet, ScrollView } from "react-native";
import { Thumbnail } from "native-base";

// store
import authStore from "../../stores/authStore";
import listStore from "../../stores/listStore";
import MyListItem from "../MyList/MyListItem";

// image
import pic from "../../media/user.png";

const DrawerContent = ({ navigation }) => {
  user = authStore.user;

  if (listStore.loading) return <Spinner color="lightblue" />;

  const foundList = listStore.list.filter(
    (list) => list.userId === authStore.user.id
  );
  const myList = foundList.map((list) => (
    <MyListItem list={list} key={list.id} navigation={navigation} />
  ));

  return (
    // REVIEW: You don't need the fragment. Remove it.
    // REVIEW: Move the inline styling and the stylesheet to a `styles` file
    <>
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView>
          <View style={styles.drawerContent}>
            <Drawer.Section style={styles.drawerSection}>
              <View style={styles.userInfoSection}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Thumbnail
                    onPress={() => navigation.navigate("EditProfile", user)}
                    source={user.image ? { uri: user.image } : pic}
                  />

                  <View style={{ flexDirection: "column", marginLeft: 15 }}>
                    <Title style={styles.title}>{user.username}</Title>
                    <Title style={styles.bio}>{user.bio}</Title>
                  </View>
                </View>
              </View>
            </Drawer.Section>

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
                  <Icon name="playlist-star" color="grey" size="25" />
                )}
                label="My List"
              />
              <ScrollView
                style={{
                  height: 200,
                  borderWidth: 0.3,
                  borderColor: "grey",
                }}
              >
                {myList}
              </ScrollView>
              <DrawerItem
                label="+Add List"
                onPress={() => {
                  navigation.navigate("AddList");
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
    color: "#22577a",
  },

  row: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  drawerSection: {
    marginTop: 5,
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
  bio: {
    fontSize: 14,
    color: "#6c757d",
  },
});
