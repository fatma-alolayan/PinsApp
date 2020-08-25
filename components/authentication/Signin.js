import React, { useState } from "react";
import { observer } from "mobx-react";

//store
import authStore from "../../stores/authStore";

//styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    authStore.signin(user);
    if (authStore.user) navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign in</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={navigation.navigate("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
