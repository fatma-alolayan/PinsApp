import React from "react";
import { Thumbnail, Card, CardItem, Right, View } from "native-base";
// Styling
import { Text, TripItemStyled, TrashIcon } from "./styles";
import { observer } from "mobx-react";
import Trip from "../../media/Trip.png";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

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
            {user.id === authStore.user.id ? (
              <TrashIcon
                name="trash"
                type="Ionicons"
                onPress={() => tripStore.deleteTrip(trip.id)}
              />
            ) : null}
          </Right>
        </CardItem>
      </Card>
    </>
  );
};

export default observer(MyTripItem);
