import React, { useState } from "react";
import { observer } from "mobx-react";
import RootNavigator from "../../components/Navigation";

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
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    isValidUser: true,
  });
  const [showPass, setShowPass] = useState(false);

  const updateShowPass = () => {
    setShowPass(!showPass);
  };
  const handleSubmit = async () => {
    await authStore.signin(user);

    if (authStore.user) {
      <RootNavigator />;
    } else {
      setUser({ ...(user.isValidUser = false) });
    }
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
        secureTextEntry={showPass ? false : true}
      />
      <TouchableOpacity onPress={updateShowPass}>
        {!showPass ? (
          <Feather name="eye-off" color="grey" size={15} />
        ) : (
          <Feather name="eye" color="grey" size={15} />
        )}
      </TouchableOpacity>
      {user.isValidUser ? (
        <Text style={{ color: "green" }}> forget password </Text>
      ) : (
        <Animatable.View animation="fadeInLeft" duration={400}>
          <Text style={{ color: "red" }}>Invalid username or password </Text>
        </Animatable.View>
      )}

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
