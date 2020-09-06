import React, { useState } from "react";
import { observer } from "mobx-react";
import { Image, ScrollView } from "react-native";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import listTripStore from "../../stores/listTripStore";
import listStore from "../../stores/listStore";

// style
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  View,
  Right,
} from "native-base";
import { TextStyled, TrashIcon } from "./styles";
import moment from "moment";

// images
import Trip from "../../media/Trip.png";
import pic from "../../media/user.png";

// component
import Ask from "../Ask";

const TripDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner color="lightblue" />;
  const { trip, user } = route.params;

  const wantToGo = listStore.list.find(
    (list) => list.defaultList && list.userId === authStore.user.id
  );
  const foundListTrip = listTripStore.listTrip.find(
    (listTrip) => listTrip.tripId === trip.id && listTrip.listId === wantToGo.id
  );

  const addToWantToGo = () => {
    if (!foundListTrip) {
      const newListTrip = {
        listId: wantToGo.id,
        tripId: trip.id,
      };
      listTripStore.createListTrip(newListTrip);
    } else {
      listTripStore.deleteListTrip(foundListTrip);
    }
  };

  const deleteTrip = () => {
    tripStore.deleteTrip(trip.id);
    navigation.navigate("Profile");
  };
  return (
    <ScrollView>
      <Card>
        <CardItem>
          <View style={{ flexDirection: "row" }}>
            {user.image ? (
              <Thumbnail small source={{ uri: user.image }} />
            ) : (
              <Thumbnail small source={pic} />
            )}
            <TextStyled
              style={{ marginTop: 9, marginLeft: 10 }}
              onPress={() => navigation.navigate("Profile", { user: user })}
            >
              {user.username}
            </TextStyled>
          </View>
        </CardItem>
        <CardItem>
          <Body style={{ alignItems: "center" }}>
            {trip.image ? (
              <Image
                source={{ uri: trip.image }}
                style={{
                  height: 200,
                  width: 380,
                  flex: 1,
                }}
              />
            ) : (
              <Image
                source={Trip}
                style={{
                  height: 200,
                  width: 380,
                  flex: 1,
                }}
              />
            )}
          </Body>
        </CardItem>

        <CardItem>
          <Left></Left>
          <Text note style={{ marginLeft: 15 }}>
            {moment(trip.createdAt).format("MMM Do YYYY")}
          </Text>
        </CardItem>

        <CardItem>
          <Left>
            <TextStyled>{trip.title}</TextStyled>
          </Left>
          {user.id !== authStore.user.id && (
            <Text
              onPress={addToWantToGo}
              note
              style={{ color: "grey", fontWeight: "bold" }}
            >
              {foundListTrip ? "Remove From List " : "Want To Go"}
            </Text>
          )}
        </CardItem>
        <CardItem>
          <TextStyled>{trip.details}</TextStyled>
        </CardItem>
        <CardItem>
          <Left></Left>
          <Right>
            {user.id === authStore.user.id ? (
              <View style={{ flexDirection: "row" }}>
                <Text
                  onPress={() =>
                    navigation.navigate("UpdateTrip", { trip: trip })
                  }
                  style={{ fontSize: 16, marginRight: 10 }}
                >
                  Edit
                </Text>
                <TrashIcon name="trash" type="Ionicons" onPress={deleteTrip} />
              </View>
            ) : null}
          </Right>
        </CardItem>
        <CardItem>
          <Ask trip={trip} />
        </CardItem>
      </Card>
    </ScrollView>
  );
};

export default observer(TripDetail);
