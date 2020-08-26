import React, { useState } from "react";
import { observer } from "mobx-react";

//store
import tripStore from "../../stores/tripStore";

//styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";
import authStore from "../../stores/authStore";

const AddTrip = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    image: "",
    details: "",
  });
  // REVIEW: Remove console logs if you're done with the testing

  const handleSubmit = async () => {
    await tripStore.createTrip(trip);
    // console.log(">>>>>>authStore.user", authStore.user);
    if (authStore.user) navigation.replace("TripList");
  };

  return (
    <AuthContainer>
      <AuthTitle>Add Trip</AuthTitle>
      <AuthTextInput
        onChangeText={(title) => setTrip({ ...trip, title })}
        placeholder="title"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(image) => setTrip({ ...trip, image })}
        placeholder="image"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(details) => setTrip({ ...trip, details })}
        placeholder="details"
        placeholderTextColor="#A6AEC1"
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Add</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Profile")}>
        Cancel
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(AddTrip);
