import React from "react";

// Styling
import { TripItemStyled } from "./styles";
import { observer } from "mobx-react";
import {
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Button,
  Text,
  View,
  Right,
} from "native-base";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import moment from "moment";

// image
import Trip from "../../media/Trip.png";
import pic from "../../media/user.png";

// store
import authStore from "../../stores/authStore";

const TripItem = ({ trip, navigation }) => {
  const user = authStore.users.find((user) => user.id === trip.userId);

  return (
    <Card>
      <CardItem>
        <View style={{ flexDirection: "row" }}>
          <Thumbnail small source={user.image ? { uri: user.image } : pic} />

          <TripItemStyled
            style={{ marginTop: 9, marginLeft: 10 }}
            // onPress={() => navigation.navigate("UserProfile", { user: user })}
            onPress={() => navigation.navigate("Profile", { user: user })}
          >
            {user.username}
          </TripItemStyled>
        </View>
      </CardItem>
      <CardItem>
        <Body style={{ alignItems: "center" }}>
          <Image
            style={{
              height: 200,
              width: 380,
              flex: 1,
            }}
            source={trip.image ? { uri: trip.image } : Trip}
          />
        </Body>
      </CardItem>

      <CardItem>
        <TripItemStyled
          onPress={() => navigation.navigate("TripDetail", { trip, user })}
        >
          {trip.title}
        </TripItemStyled>
        <Body></Body>
        <Right>
          <Text note style={{ marginLeft: 15 }}>
            {moment(trip.createdAt).format("MMM Do YYYY")}
          </Text>
        </Right>
      </CardItem>

      <CardItem>
        <Left>
          {/* <Button transparent textStyle={{ color: "#87838B" }}>
            <Icon name="like2" size="18" />
            <Text>likes</Text>
          </Button> */}
        </Left>
      </CardItem>
    </Card>
  );
};

export default observer(TripItem);
