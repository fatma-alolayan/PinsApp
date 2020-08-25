import React from "react";
import { StyleSheet, Text, View } from "react-native";
import logo from "../../logo.jpeg";

// Styling
import { HomeBackground, TopStyling, Title, ButtonStyled } from "./styles";

const Home = () => {
  return (
    <HomeBackground source={logo}>
      <Text>Sign in</Text>
    </HomeBackground>
  );
};

export default Home;
