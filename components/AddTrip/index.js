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
// import TextInput from "react-native-textinput-multiline";
import TextInput from "react-native"; // remove unused imports

const AddTrip = ({ navigation }) => {
  // i think you mean "reset"
  const rest = { title: "", image: "", details: "" };
  const [trip, setTrip] = useState(rest);

  const handleSubmit = async () => {
    await tripStore.createTrip(trip);

    /**
     * might be cleaner and nicer to define a method called resetForm()
     * that when called would reset the form
     * and here you just call the method
     * this way you wont even need to define the "rest" object.
     */
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
        value={trip.image}
      />

      <AuthMultiLineInput
        onChangeText={(details) => setTrip({ ...trip, details })}
        placeholder="details"
        placeholderTextColor="#A6AEC1"
        value={trip.details}
        multiline={true}
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
