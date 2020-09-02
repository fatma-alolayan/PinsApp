import React from "react";
import { observer } from "mobx-react";
import { Image, ScrollView } from "react-native";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

// style
import {
  Header,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  View,
  Right,
} from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { TextStyled, TrashIcon } from "./styles";
import moment from "moment";

// image
import Trip from "../../media/Trip.png";
import pic from "../../media/user.png";

// component
import AskMe from "../AskMe";

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
          <Left>
            {/* <Button transparent textStyle={{ color: "#87838B" }}>
              <Icon name="like2" size="18" />
              <Text>likes</Text>
            </Button> */}
          </Left>
          <Text note style={{ marginLeft: 15 }}>
            {moment(trip.createdAt).format("MMM Do YYYY")}
          </Text>
        </CardItem>
        <CardItem>
          <TextStyled>{trip.title}</TextStyled>
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
                <TrashIcon
                  name="trash"
                  type="Ionicons"
                  onPress={() => tripStore.deleteTrip(trip.id)}
                />
              </View>
            ) : null}
          </Right>
        </CardItem>
        <CardItem>
          <AskMe trip={trip} />
        </CardItem>
      </Card>
    </ScrollView>
  );
};

export default observer(TripDetail);
