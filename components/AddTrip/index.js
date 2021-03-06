import React, { useState } from "react";
import { observer } from "mobx-react";

//store
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

//styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
  AuthMultiLineInput,
} from "./styles";

const AddTrip = ({ navigation }) => {
  const reset = { title: "", image: "", details: "" };

  const [trip, setTrip] = useState(reset);
  const [error, setEroror] = useState(false);

  const handleSubmit = async () => {
    if (trip.title !== "") {
      await tripStore.createTrip(trip);
      setTrip(reset);
      setEroror(false);
      navigation.navigate("Profile");
    } else setEroror(true);
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
        value={trip.image}
      />

      <AuthMultiLineInput
        onChangeText={(details) => setTrip({ ...trip, details })}
        placeholder="details"
        placeholderTextColor="#A6AEC1"
        value={trip.details}
        multiline={true}
      />
      {error && (
        <AuthOther style={{ color: "red" }}> Title should be entered</AuthOther>
      )}
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
