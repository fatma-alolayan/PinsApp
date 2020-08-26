import React from "react";
import { observer } from "mobx-react";
import { Spinner, List, Content } from "native-base";

//store
import tripStore from "../../stores/tripStore";
//componants
import TripItem from "./TripItem";

const TripList = ({ route }) => {
  if (tripStore.loading) return <Spinner />;

  // const { trip } = route.params;

  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} />
  ));

  return (
    <Content>
      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);
