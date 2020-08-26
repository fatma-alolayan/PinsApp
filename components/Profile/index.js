import React from "react";
import { View, Text } from "react-native";
import { Spinner, List, Container } from "native-base";
import authStore from "../../stores/authStore";
import { Title, Button } from "react-native-paper";
import { observer } from "mobx-react";
import MyTripItem from "../MyTrip/MyTripItem";
import tripStore from "../../stores/tripStore";
import AddButton from "../buttons/AddButton";

const Profile = ({ navigation }) => {
  if (tripStore.loading) return <Spinner color="lightblue" />;
  const user = authStore.user;

  const foundmyTrip = tripStore.trips.filter((trip) => trip.userId === user.id);
  console.log("......foundmyTrip", foundmyTrip);
  const myTrip = foundmyTrip.map((trip) => (
    <MyTripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <>
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
        <Title
          style={{
            fontSize: 16,
            marginTop: 3,
            fontWeight: "bold",
            color: "blue",
          }}
        >
          {authStore.user.username}
        </Title>
        <Text> </Text>
        <Text>Signout</Text>
      </Button>
      {!authStore.user ? navigation.replace("Intro") : null}

      {/* <AddButton /> */}
      <Button onPress={() => navigation.navigate("AddTrip")}>
        <Text>add</Text>
      </Button>
      <Container>
        <List>{myTrip}</List>
      </Container>
    </>
  );
};

export default observer(Profile);
