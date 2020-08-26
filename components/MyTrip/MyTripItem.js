import React from "react";
import { Thumbnail, Card, CardItem, Right } from "native-base";
// Styling
import { Text, TripItemStyled } from "./styles";
import { Button } from "react-native-paper";
import { observer } from "mobx-react";
import { TrashIcon } from "./styles";
import Trip from "../../media/Trip.png";

import tripStore from "../../stores/tripStore";
import TripDetail from "../TripDetail";

const MyTripItem = ({ trip, navigation }) => {
  let tripId = trip.id;
  return (
    // REVIEW: You don't need a fragment if you already have a component wrapping all components
    <>
      <Card>
        <CardItem>
          {trip.imag ? (
            <Thumbnail source={{ uri: trip.imag }} />
          ) : (
            <Thumbnail source={Trip} />
          )}
          <TripItemStyled
            onPress={() => navigation.navigate("TripDetail", { tripId })}
          >
            {trip.title}
          </TripItemStyled>

          <Right>
            <TrashIcon
              name="trash"
              type="Ionicons"
              onPress={() => tripStore.deleteTrip(trip.id)}
            />
          </Right>
        </CardItem>
      </Card>
    </>
  );
};

export default observer(MyTripItem);
