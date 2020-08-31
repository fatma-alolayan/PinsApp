import React from "react";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
import { List, Spinner, Container, Card } from "native-base";

// component
import TripItem from "./TripItem";

// store
import tripStore from "../../stores/tripStore";

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
