import React from "react";
import { observer } from "mobx-react";
import { ScrollView, Dimensions } from "react-native";
import { List, Spinner, Container, Card } from "native-base";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";

import authStore from "../../stores/authStore";
// import { TextStyle } from "./styles";
const TripList = ({ navigation }) => {

  if (tripStore.loading) return <Spinner color="lightblue" />;

  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  if (tripList.length === 0) return <TextStyle>No Trips</TextStyle>;
  return (
    <Container>
      <ScrollView>
        <List>{tripList}</List>

      </ScrollView>
    </Container>

  );
};

export default observer(TripList);
