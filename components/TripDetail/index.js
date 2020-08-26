import React from "react";

import { observer } from "mobx-react";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

// component
// import DeleteButton from "../buttons/DeleteButton";
// import UpdateButton from "../buttons/UpdateButton";

// style
import { FWrapper, Description } from "./styles";
import { Text, Thumbnail } from "native-base";

const TripDetail = ({ tripId, navigation }) => {
  console.log("0000000id", tripId);
  const trip = tripStore.trips.find((trip) => trip.id === 1);

  if (!trip) return navigation.replace("Home");

  return (
    <>
      <FWrapper>
        <Description>{trip.title}</Description>
        <Text>{trip.details}</Text>
        <Thumbnail src={trip.image} />
        {/* <UpdateButton oldShop={shop} /> */}
      </FWrapper>
    </>
  );
};

export default observer(TripDetail);
