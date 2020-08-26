
import React from "react";
import { Thumbnail, Card, CardItem } from "native-base";
// Styling
import { Text, TripItemStyled } from "./styles";
import Trip from "../../media/Trip.png";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
const TripItem = ({ trip, navigation }) => {
  // const username = authStore.users.find((user) => user.id === trip.userId);
  console.log("mmmmmm", authStore.users);

  return (
    <>
      <Card>
        <CardItem>
          {trip.imag ? (
            <Thumbnail source={{ uri: trip.imag }} />
          ) : (
            <Thumbnail source={Trip} />
          )}
          <TripItemStyled
            onPress={() => navigation.navigate("Detail", { trip: trip })}
          >
            {trip.title}
          </TripItemStyled>
          <TripItemStyled
            onPress={() => navigation.navigate("Detail", { trip: trip })}
          >
            username
          </TripItemStyled>
        </CardItem>
      </Card>
    </>
  );
};

export default observer(TripItem);

