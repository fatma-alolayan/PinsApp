import React from "react";
import { observer } from "mobx-react";

import { List, Spinner, Container, Card } from "native-base";
import tripStore from "../../stores/tripStore";
import MyTripItem from "./TripItem";
import authStore from "../../stores/authStore";

const MyTrip = ({ navigation, route }) => {
  if (tripStore.loading) return <Spinner color="lightblue" />;

  const user = authStore.user;

  const foundmyTrip = tripStore.trips.filter((trip) => trip.userId === user.id);
  const myTrip = foundmyTrip.map((trip) => (
    <MyTripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Container>
      <List>{myTrip}</List>
    </Container>
  );
};

export default observer(MyTrip);
