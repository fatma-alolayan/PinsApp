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
// in this code, you're only using View from Animatable
// generally speaking you never wanna import * anything ever
// because you're importing a million things and you're only
// using one of them
// so just import { View } from "react-native-animatable";
import * as Animatable from "react-native-animatable";
import { Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const Signin = ({ navigation }) => {
  const reset = {
    username: "",
    password: "",
    isValidUser: true,
  };
  const [user, setUser] = useState({
    username: "",
    password: "",
    isValidUser: true,
  });
  const [showPass, setShowPass] = useState(false);

  // I'd rename this to toggleShowPass()
  const updateShowPass = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async () => {
    await authStore.signin(user);

    if (authStore.user) {
      // this line here makes no sense, ill need you to explain it to me later.
      <RootNavigator />;
    } else {
      // i wonder how this line works... 🤔
      // curious about the () part
      setUser({ ...(user.isValidUser = false) });
      // setUser(reset);
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
        value={user.username}
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={showPass ? false : true}
        value={user.password}
      />
      <TouchableOpacity onPress={updateShowPass}>
        {!showPass ? (
          // since this line and the else line are mostly the same except the "-off" part of the name
          // have the condition be within the name attribute
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
