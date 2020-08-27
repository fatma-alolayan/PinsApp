import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Spinner,
  List,
  Container,
  Left,
  Thumbnail,
  Header,
  Content,
  Right,
} from "native-base";
import authStore from "../../stores/authStore";
import { Title, Button } from "react-native-paper";
import { observer } from "mobx-react";
import MyTripItem from "../MyTrip/MyTripItem";
import tripStore from "../../stores/tripStore";
import AddButton from "../buttons/AddButton";

const Profile = ({ navigation, route }) => {
  if (tripStore.loading) return <Spinner color="lightblue" />;
  const [authorized, setAuthorized] = useState(false);
  let user = authStore.user;
  // const { _user } = route.params;
  console.log(".._user..", user);
  // if (_user) user = _user;

  // console.log("..authStore.user...", authStore.user);
  console.log(user.id === authStore.user.id);

  // if (user.id === authStore.user.id) {
  //   setAuthorized(true);
  // }
  //else {
  //   setAuthorized(false);
  // }

  const foundmyTrip = tripStore.trips.filter((trip) => trip.userId === user.id);
  const myTrip = foundmyTrip.map((trip) => (
    <MyTripItem trip={trip} key={trip.id} user={user} navigation={navigation} />
  ));
  return (
    <>
      {!authStore.user ? navigation.replace("Intro") : null}
      <Container>
        <Header style={{ flex: 0 }}>
          <Thumbnail
            onPress={() => navigation.navigate("EditProfile", user)}
            source={{ uri: user.image }}
          />
          <Title
            onPress={() => navigation.navigate("EditProfile", { user: user })}
            style={{
              fontSize: 16,
              marginTop: 3,
              fontWeight: "bold",
              color: "blue",
            }}
          >
            {authStore.user.username}
          </Title>
          <Button onPress={() => navigation.navigate("AddTrip")}>
            <Text>add Trip</Text>
          </Button>
          <Right>
            <Button
              onPress={() => {
                authStore.signout();
              }}
              style={{
                alignItems: "center",
                marginTop: 30,
                flexDirection: "column",
                marginLeft: 15,
              }}
            >
              <Text>Signout</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <List>{myTrip}</List>
        </Content>
      </Container>
    </>
  );
};

export default observer(Profile);
