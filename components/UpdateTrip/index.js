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

const UpdateTrip = ({ navigation, route }) => {
  const { trip } = route.params;

  const reset = { title: "", image: "", details: "" };
  const [_trip, setTrip] = useState(trip ?? reset);

  const handleSubmit = async () => {
    await tripStore.updateTrip(_trip);
    setTrip(reset);

    if (authStore.user) navigation.goBack();
  };

  return (
    <AuthContainer>
      <AuthTitle>Update Trip</AuthTitle>

      <AuthTextInput
        onChangeText={(title) => setTrip({ ..._trip, title })}
        placeholder="title"
        placeholderTextColor="#A6AEC1"
        value={_trip.title}
      />
      <AuthTextInput
        onChangeText={(image) => setTrip({ ..._trip, image })}
        placeholder="image"
        placeholderTextColor="#A6AEC1"
        value={_trip.image}
      />
      <AuthMultiLineInput
        onChangeText={(details) => setTrip({ ..._trip, details })}
        placeholder="details"
        placeholderTextColor="#A6AEC1"
        value={_trip.details}
        multiline={true}
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Update</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.goBack()}>Cancel</AuthOther>
    </AuthContainer>
  );
};

export default observer(UpdateTrip);
