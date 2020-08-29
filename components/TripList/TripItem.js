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
  View,
} from "native-base";
import { Image } from "react-native";
import Trip from "../../media/Trip.png";

const TripItem = ({ trip, navigation }) => {
  const user = authStore.users.find((user) => user.id === trip.userId);

  return (
    <Card>
      <CardItem>
        <View style={{ flexDirection: "row" }}>
          {user.image ? (
            <Thumbnail small source={{ uri: user.image }} />
          ) : (
            <Thumbnail small source={pic} />
          )}

          <TripItemStyled
            style={{ marginTop: 9, marginLeft: 10 }}
            onPress={() => navigation.navigate("UserProfile", { user: user })}
          >
            {user.username}
          </TripItemStyled>
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
      <Text note style={{ marginLeft: 15 }}>
        {trip.createdAt}
      </Text>
      <CardItem>
        <TripItemStyled
          onPress={() => navigation.navigate("TripDetail", { trip, user })}
        >
          {trip.title}
        </TripItemStyled>
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
  );
};

export default observer(TripItem);
