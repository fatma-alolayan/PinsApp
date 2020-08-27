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

const EditProfile = ({ navigation, route }) => {
  const { user } = route.params;

  const [_user, setUser] = useState(user);

  const handleSubmit = async () => {
    await authStore.updateUser(_user);

    if (authStore.user) navigation.goBack();
  };

  return (
    <AuthContainer>
      <AuthTitle>Update user</AuthTitle>

      <AuthTextInput
        onChangeText={(username) => setUser({ ..._user, username })}
        placeholder="username"
        placeholderTextColor="#A6AEC1"
        value={_user.username}
      />
      <AuthTextInput
        onChangeText={(firstName) => setUser({ ..._user, firstName })}
        placeholder="firstName"
        placeholderTextColor="#A6AEC1"
        value={_user.firstName}
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ..._user, lastName })}
        placeholder="lastName"
        placeholderTextColor="#A6AEC1"
        value={_user.lastName}
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ..._user, email })}
        placeholder="email"
        placeholderTextColor="#A6AEC1"
        value={_user.email}
      />

      <AuthTextInput
        onChangeText={(image) => setUser({ ..._user, image })}
        placeholder="image"
        placeholderTextColor="#A6AEC1"
        value={_user.image}
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Edit</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.goBack()}>Cancel</AuthOther>
    </AuthContainer>
  );
};

export default observer(EditProfile);
