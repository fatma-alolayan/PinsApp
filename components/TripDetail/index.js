import React from "react";

import { observer } from "mobx-react";
import Trip from "../../media/Trip.png";
import { Image } from "react-native";
// Stores
import tripStore from "../../stores/tripStore";

// style
import { FWrapper, Description } from "./styles";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from "native-base";
import authStore from "../../stores/authStore";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  const { user } = route.params;

  const foundTrip = tripStore.trips.find((_trip) => _trip.id === trip.id);
  if (!foundTrip) return navigation.replace("Home");

  return (
    <Container>
      <Header style={{ flex: 0 }}>
        <Thumbnail source={{ uri: user.image }} />
        <Text>{user.username}</Text>
      </Header>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Body>
                <Text>{trip.title}</Text>
                {/* <Text note>April 15, 2016</Text> */}
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: trip.image }}
                style={{
                  height: 200,
                  width: 350,
                  flex: 1,
                }}
              />
              <Text>{trip.details}</Text>
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
          {authStore.user.id === trip.userId ? (
            <Button
              transparent
              onPress={() => navigation.navigate("UpdateTrip", { trip: trip })}
            >
              <Text style={{ fontSize: 18 }}>Edit</Text>
            </Button>
          ) : null}
        </Card>
      </Content>
    </Container>
  );
};

export default observer(TripDetail);
