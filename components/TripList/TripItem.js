import React, { useState } from "react";

import {
  ListItem,
  Thumbnail,
  Left,
  Right,
  Button,
  Body,
  Text,
} from "native-base";
import { TripStyled } from "./styles";

//stores
// import cartStore from "../../stores/cartStore";

const TripItem = ({ trip }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newTrip = { quantity: quantity, tripId: trip.id };
    // cartStore.addItem(newTrip);
  };
  return (
    <ListItem>
      <Thumbnail source={trip.image} />

      <Left>
        <Body>
          <TripStyled>{trip.title}</TripStyled>
        </Body>
      </Left>
    </ListItem>
  );
};

export default TripItem;
