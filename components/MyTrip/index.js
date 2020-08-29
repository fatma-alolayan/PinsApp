import React from "react";
import { observer } from "mobx-react";

import { List, Spinner, Container, Card, Text } from "native-base";
import tripStore from "../../stores/tripStore";
import MyTripItem from "./MyTripItem";
import authStore from "../../stores/authStore";
import { TextStyle } from "./styles";

const MyTrip = ({ navigation }) => {
  if (tripStore.loading) return <Spinner color="lightblue" />;

  const user = authStore.user;

  const foundmyTrip = tripStore.trips.filter((trip) => trip.userId === user.id);
  if (foundmyTrip.length === 0) return <TextStyle>No Trips</TextStyle>;

  const myTrip = foundmyTrip.map((trip) => (
    <MyTripItem trip={trip} key={trip.id} user={user} navigation={navigation} />
  ));

  return (
    <Container>
      <List>{myTrip}</List>
    </Container>
  );
};

export default observer(MyTrip);
