import React from "react";
import { View, Text } from "react-native";
import { Spinner } from "native-base";

const Profile = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 30 }}>
      <Spinner color="lightblue" size="large" />
    </View>
  );
};

export default Profile;
