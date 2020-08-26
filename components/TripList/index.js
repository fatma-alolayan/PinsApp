import React from "react";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
import { List, Spinner, Container, Card } from "native-base";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner color="lightblue" />;

  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <ScrollView>
      <Container>
        <List>{tripList}</List>
      </Container>
    </ScrollView>
  );
};

export default observer(TripList);
