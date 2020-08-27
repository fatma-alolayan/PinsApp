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

const MyTripItem = ({ user, trip, navigation }) => {
  return (
    <>
      <Card>
        <CardItem>
          {trip.image ? (
            <Thumbnail source={{ uri: trip.image }} />
          ) : (
            <Thumbnail source={Trip} />
          )}
          <TripItemStyled
            onPress={() => navigation.navigate("TripDetail", { trip, user })}
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
