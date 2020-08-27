import React from "react";

// Styling
import { TripItemStyled } from "./styles";
import Trip from "../../media/Trip.png";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import {
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
  Button,
  Text,
} from "native-base";
import { Image, ScrollView } from "react-native";

const TripItem = ({ trip, navigation }) => {
  let tripId = trip.id;
  // const user = authStore.users.find((user) => user.id === trip.userId);

  return (
    <ScrollView>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>
              {/* REVIEW: You can clean this up to be <Thumbnail source={trip.image ? { uri: trip.image } : Trip} />  */}
              {trip.image ? (
                <Thumbnail source={{ uri: trip.image }} />
              ) : (
                <Thumbnail source={Trip} />
              )}
              <TripItemStyled>{trip.title}</TripItemStyled>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body onPress={() => navigation.navigate("TripDetail", { tripId })}>
            <Image
              source={{ uri: trip.image }}
              style={{
                height: 200,
                width: 350,
                flex: 1,
              }}
            />

            <TripItemStyled
            // onPress={() => navigation.navigate("Detail", { trip: trip })}
            >
              {trip.title}
            </TripItemStyled>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <Icon name="logo-github" />
              <Text>likes</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    </ScrollView>
  );
};

export default observer(TripItem);
