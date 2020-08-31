import React from "react";
import { observer } from "mobx-react";
import { Image, ScrollView } from "react-native";
// Stores
import tripStore from "../../stores/tripStore";

import {
  Header,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  View,
  Right,
} from "native-base";
import authStore from "../../stores/authStore";
import { TextStyled, TrashIcon } from "./styles";
import Trip from "../../media/Trip.png";
import pic from "../../media/user.png";
import QA from "../QA";

const TripDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner color="lightblue" />;

  const { trip, user } = route.params;

  const foundTrip = tripStore.trips.find((_trip) => _trip.id === trip.id);
  if (!foundTrip) return navigation.replace("Home");

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
              onPress={() => navigation.navigate("UserProfile", { user: user })}
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
          <Left>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <Icon name="logo-github" />
              <Text>likes</Text>
            </Button>
          </Left>
          <Text note style={{ marginLeft: 15 }}>
            {trip.createdAt}
          </Text>
        </CardItem>
        <CardItem>
          <TextStyled>{trip.title}</TextStyled>
        </CardItem>
        <CardItem>
          <TextStyled>{trip.details}</TextStyled>
        </CardItem>
        <CardItem>
          {user.id === authStore.user.id ? (
            <TrashIcon
              name="trash"
              type="Ionicons"
              size="10"
              onPress={() => tripStore.deleteTrip(trip.id)}
            />
          ) : null}

          {authStore.user.id === trip.userId ? (
            <Button
              transparent
              onPress={() => navigation.navigate("UpdateTrip", { trip: trip })}
            >
              <Text style={{ fontSize: 16 }}>Edit</Text>
            </Button>
          ) : null}
        </CardItem>
        <CardItem>
          <QA trip={trip} />
        </CardItem>
      </Card>
    </ScrollView>
  );
};

export default observer(TripDetail);
