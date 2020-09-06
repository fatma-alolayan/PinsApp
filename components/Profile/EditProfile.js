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
  EditContainer,
} from "./styles";
import { Thumbnail } from "native-base";
import { SmallText, LabelTitle } from "./styles";
import { View } from "react-native-animatable";

// images
import pic from "../../media/user.png";
import ImagePicker from "react-native-image-crop-picker";

const EditProfile = ({ navigation }) => {
  const [changeImage, setchangeImage] = useState(false);
  const user = authStore.user;

  const [_user, setUser] = useState(user);

  const handleSubmit = async () => {
    await authStore.updateUser(_user);

    if (authStore.user) navigation.goBack();
  };

  return (
    <>
      <AuthContainer>
        <AuthTitle>Edit User</AuthTitle>
        {user.image ? (
          <Thumbnail large source={{ uri: user.image }} />
        ) : (
          <Thumbnail source={pic} />
        )}
        <SmallText
          onPress={() => setchangeImage(!changeImage)}
          style={{ paddingBottom: 20 }}
        >
          Change image
        </SmallText>
      </AuthContainer>
      <EditContainer>
        {changeImage && (
          <View style={{ flexDirection: "row" }}>
            <LabelTitle>Image</LabelTitle>

            <AuthTextInput
              onChangeText={(image) => setUser({ ..._user, image })}
              placeholder="image"
              placeholderTextColor="#A6AEC1"
              value={_user.image}
            />
          </View>
        )}

        <View style={{ flexDirection: "row" }}>
          <LabelTitle>Username</LabelTitle>
          <AuthTextInput
            onChangeText={(username) => setUser({ ..._user, username })}
            placeholder="username"
            placeholderTextColor="#A6AEC1"
            value={_user.username}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <LabelTitle>First Name</LabelTitle>
          <AuthTextInput
            onChangeText={(firstName) => setUser({ ..._user, firstName })}
            placeholder="firstName"
            placeholderTextColor="#A6AEC1"
            value={_user.firstName}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <LabelTitle>Bio</LabelTitle>
          <AuthTextInput
            onChangeText={(bio) => setUser({ ..._user, bio })}
            placeholder="bio"
            placeholderTextColor="#A6AEC1"
            value={_user.bio}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <LabelTitle>Last Name</LabelTitle>
          <AuthTextInput
            onChangeText={(lastName) => setUser({ ..._user, lastName })}
            placeholder="lastName"
            placeholderTextColor="#A6AEC1"
            value={_user.lastName}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <LabelTitle>Email </LabelTitle>
          <AuthTextInput
            onChangeText={(email) => setUser({ ..._user, email })}
            placeholder="email"
            placeholderTextColor="#A6AEC1"
            value={_user.email}
          />
        </View>
      </EditContainer>
      <AuthContainer>
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Edit</AuthButtonText>
        </AuthButton>
        <AuthOther onPress={navigation.goBack}>Cancel</AuthOther>
      </AuthContainer>
    </>
  );
};

export default observer(EditProfile);
