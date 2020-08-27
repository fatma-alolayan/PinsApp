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
  const rest = { title: "", image: "", details: "" };
  const [trip, setTrip] = useState(rest);

  const handleSubmit = async () => {
    await tripStore.createTrip(trip);

    setTrip(rest);
    if (authStore.user) navigation.goBack();
  };

  return (
    <AuthContainer>
      <AuthTitle>Add Trip</AuthTitle>

      <AuthTextInput
        onChangeText={(title) => setTrip({ ...trip, title })}
        placeholder="title"
        placeholderTextColor="#A6AEC1"
        value={trip.title}
      />
      <AuthTextInput
        onChangeText={(image) => setTrip({ ...trip, image })}
        placeholder="image"
        placeholderTextColor="#A6AEC1"
        // value={_trip.image}
      />

      <AuthTextInput
        onChangeText={(details) => setTrip({ ...trip, details })}
        placeholder="details"
        placeholderTextColor="#A6AEC1"
        value={trip.details}
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
