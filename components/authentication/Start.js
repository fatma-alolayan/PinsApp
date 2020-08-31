import React from "react";

// image
import logo from "../../media/logo.jpeg";

// Styling
import { HomeBackground, ButtomStyling, SignInStyle } from "./styles";
import authStore from "../../stores/authStore";

const Start = ({ navigation }) => {
  return (
    <HomeBackground source={logo}>
      <ButtomStyling>
        {authStore.user ? (
          <SignInStyle onPress={() => navigation.navigate("TripList")}>
            Enter
          </SignInStyle>
        ) : (
          <SignInStyle onPress={() => navigation.navigate("Signin")}>
            Sign in
          </SignInStyle>
        )}
      </ButtomStyling>
    </HomeBackground>
  );
};

export default Start;
