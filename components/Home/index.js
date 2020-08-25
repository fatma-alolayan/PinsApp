import React from "react";
import { Text } from "react-native";
import logo from "../../logo.jpeg";

// Styling
import { HomeBackground } from "./styles";

const Home = () => {
  return (
    <HomeBackground source={logo}>
      <Text>Sign in</Text>
    </HomeBackground>
  );
};

export default Home;
