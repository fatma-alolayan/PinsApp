import React from "react";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
import { List, Spinner, Container } from "native-base";

// component
import TripItem from "./TripItem";

// store
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner color="lightblue" />;

  const foundTrip = tripStore.trips.filter(
    (trip) => trip.userId !== authStore.user.id
  );

  const tripList = foundTrip.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Container>
      <ScrollView>
        <List>{tripList}</List>
      </ScrollView>
    </Container>
  );
};

export default observer(TripList);
