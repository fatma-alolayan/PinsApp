
import React from "react";

// Styling
import { TripItemStyled } from "./styles";

import pic from "../../media/user.png";

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

  const user = authStore.users.find((user) => user.id === trip.userId);

  return (
    <ScrollView>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>

              {user.image ? (
                <Thumbnail source={{ uri: user.image }} />
              ) : (
                <Thumbnail source={pic} />
              )}
              <TripItemStyled
                onPress={() => navigation.navigate("Profile", { _user: user })}
              >
                {user.username}
              </TripItemStyled>

              <TripItemStyled>{trip.title}</TripItemStyled>
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

            <TripItemStyled

              onPress={() => navigation.navigate("TripDetail", { trip, user })}

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

