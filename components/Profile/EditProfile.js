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
import { Thumbnail } from "native-base";
import pic from "../../media/user.png";
import { SmallText, LabelTitle } from "./styles";
import { View } from "react-native-animatable";
import ImagePicker from "react-native-image-crop-picker";

import {
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";

const EditProfile = ({ navigation }) => {
  const [changeImage, setchangeImage] = useState(false);

  const user = authStore.user;

  const [_user, setUser] = useState(user);

  const handleSubmit = async () => {
    await authStore.updateUser(_user);

    if (authStore.user) navigation.goBack();
  };

  const [image, setImage] = useState(
    "https://api.adorable.io/avatars/80/abott@adorable.png"
  );

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      // cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  return (
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

      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>

      {changeImage ? (
        <View style={{ flexDirection: "row" }}>
          <LabelTitle>Image</LabelTitle>

          <AuthTextInput
            onChangeText={(image) => setUser({ ..._user, image })}
            placeholder="image"
            placeholderTextColor="#A6AEC1"
            value={_user.image}
          />
        </View>
      ) : null}
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
        <LabelTitle>Last Name</LabelTitle>
        <AuthTextInput
          onChangeText={(lastName) => setUser({ ..._user, lastName })}
          placeholder="lastName"
          placeholderTextColor="#A6AEC1"
          value={_user.lastName}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <LabelTitle> Email </LabelTitle>
        <AuthTextInput
          onChangeText={(email) => setUser({ ..._user, email })}
          placeholder="email"
          placeholderTextColor="#A6AEC1"
          value={_user.email}
        />
      </View>

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Edit</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.goBack()}>Cancel</AuthOther>
    </AuthContainer>
  );
};

export default observer(EditProfile);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
