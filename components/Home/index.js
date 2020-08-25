import React from "react";
import { Text } from "react-native";
import logo from "../../logo.jpeg";

// Styling
import { HomeBackground, ButtomStyling, SignInStyle } from "./styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground source={logo}>
      <ButtomStyling>
        <SignInStyle onPress={() => navigation.navigate("Signin")}>
          Sign in
        </SignInStyle>
      </ButtomStyling>
    </HomeBackground>
  );
};

export default Home;
