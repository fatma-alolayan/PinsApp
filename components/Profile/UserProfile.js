import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import {
  Spinner,
  List,
  Container,
  Left,
  Thumbnail,
  Header,
  Content,
  Right,
  CardItem,
  Body,
} from "native-base";
import authStore from "../../stores/authStore";
import { Title, Button, Card } from "react-native-paper";
import { observer } from "mobx-react";
import MyTripItem from "../MyTrip/MyTripItem";
import tripStore from "../../stores/tripStore";
import pic from "../../media/user.png";
import Trip from "../../media/Trip.png";
import { SmallText } from "./styles";

const numColumns = 2;
const UserProfile = ({ navigation, route }) => {
  if (tripStore.loading) return <Spinner color="lightblue" />;

  let { user } = route.params;
  if (user.id === authStore.user.id) navigation.replace("Profile");

  const foundmyTrip = tripStore.trips.filter((trip) => trip.userId === user.id);
  // const myTrip = foundmyTrip.map((trip) => (
  //   <MyTripItem trip={trip} key={trip.id} user={user} navigation={navigation} />
  // ));
  const numColumns = 3;

  const renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={{ color: "#fff" }} />;
    }

    return (
      <View
        style={{
          // backgroundColor: "#4D243D",
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
    <>
      {!authStore.user ? navigation.replace("Intro") : null}
      <Container>
        <Card>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            {user.image ? (
              <Thumbnail source={{ uri: user.image }} />
            ) : (
              <Thumbnail source={pic} />
            )}
            <Title
              style={{
                fontSize: 16,
                marginTop: 15,
                color: "black",
                marginLeft: 10,
              }}
            >
              {user.username}
            </Title>

            <Right>
              <CardItem>
                <SmallText>pins </SmallText>
                <SmallText style={{ color: "blue" }}>
                  {foundmyTrip.length}
                </SmallText>
              </CardItem>
            </Right>
          </View>
        </Card>
        <Content>
          <ScrollView>
            <FlatList
              data={foundmyTrip}
              style={{ flex: 1, marginVertical: 20 }}
              renderItem={renderItem}
              numColumns={2}
            />
          </ScrollView>
          {/* <List>{myTrip}</List> */}
        </Content>
      </Container>
    </>
  );
};

export default observer(UserProfile);
