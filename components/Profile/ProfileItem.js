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
