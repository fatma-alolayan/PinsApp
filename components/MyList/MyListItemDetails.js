import React from "react";
import { observer } from "mobx-react";

import {
  List,
  Spinner,
  Container,
  Card,
  CardItem,
  Right,
  Body,
} from "native-base";

// store
import listTripStore from "../../stores/listTripStore";
import tripStore from "../../stores/tripStore";

// style
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import trip from "../../media/Trip.png";
import { TextStyle } from "./styles";

const MyListItemDetails = ({ navigation, route }) => {
  if (listTripStore.loading) return <Spinner color="lightblue" />;
  const { list } = route.params;

  const listTrip = listTripStore.listTrip.filter(
    (trip) => trip.listId === list.id
  );

  if (!listTrip) return <Text>No trip</Text>;

  const trips = tripStore.trips.filter((item) =>
    listTrip.find((trip) => item.id === trip.tripId)
  );
  const removeTrip = (trip) => {
    const foundListListTrip = listTripStore.listTrip.find(
      (listTrip) => listTrip.tripId === trip.id && listTrip.listId === list.id
    );
    listTripStore.deleteListTrip(foundListListTrip);
  };
  const renderItem = ({ item }) => {
    return (
      // REVIEW: move inline styling to styles.js
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          margin: 1,
        }}
      >
        <Card>
          <CardItem style={{ width: 350 }}>
            {item.image ? (
              <Image
                source={{ uri: item.image }}
                style={{
                  height: 80,
                  width: 150,
                }}
              />
            ) : (
              <Image
                source={trip}
                style={{
                  height: 80,
                  width: 150,
                }}
              />
            )}
            <Body>
              <Text
                onPress={() =>
                  navigation.navigate("TripDetail", { trip: item, user })
                }
                style={{
                  color: "black",
                  paddingLeft: 15,
                  fontWeight: "bold",
                  paddingTop: 30,
                }}
              >
                {item.title}
              </Text>
            </Body>
            <Right>
              <Text
                onPress={() => removeTrip(item)}
                style={{
                  color: "grey",

                  fontWeight: "bold",
                }}
              >
                Remove
              </Text>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  };

  return (
    <>
      <Card style={{ height: 50 }}>
        <TextStyle style={{ fontWeight: "bold" }}>{list.title} List</TextStyle>
      </Card>
      <ScrollView>
        <FlatList
          data={trips}
          style={{ flex: 1 }}
          renderItem={renderItem}
          numColumns={1}
        />
      </ScrollView>
    </>
  );
};

export default observer(MyListItemDetails);
