import React from "react";
import { observer } from "mobx-react";

// style
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

// component

// image
import Trip from "../../media/Trip.png";

const ProfileItem = ({ navigation, trip, user }) => {
  const numColumns = 2;

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          margin: 1,

          height: Dimensions.get("window").width / numColumns,
        }}
      >
        {item.image ? (
          // again, this condition should be within the Image component to avoid repeated code
          <Image
            source={{ uri: item.image }}
            style={{
              height: 100,
              width: 180,
            }}
          />
        ) : (
          <Image
            source={Trip}
            style={{
              height: 100,
              width: 180,
            }}
          />
        )}
        <Text
          onPress={() =>
            navigation.navigate("TripDetail", { trip: item, user })
          }
          style={{ color: "black" }}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  /**
   * This ScrollView should be where you're rendering ProfileItem in index.js
   * This file's default export component should be the renderItem method renamed to ProfileTripItem
   * This file should be renamed to ProfileTripItem
   * 
   * A question for the standup meeting: Why are you not using TripItem to display the trips in the Profile?
   *  Why create a brand new component to display it, rather than just reuse the TripItem component?
   */

  return (
    <ScrollView>
      <FlatList
        data={trip}
        style={{ flex: 1 }}
        renderItem={renderItem}
        numColumns={2}
      />
    </ScrollView>
  );
};

export default observer(ProfileItem);
