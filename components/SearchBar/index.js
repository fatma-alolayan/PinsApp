import React, { useState } from "react";
import { Text, View } from "react-native";
import Search from "react-native-search-box";

// Styling
import { TextStyle, SearchBarStyled } from "./styles";

const SearchBar = ({ trips = [] }) => {
  const [query, setQuery] = useState("");

  const filteredTrips = trips.filter((trip) =>
    trip.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <TextStyle>Search</TextStyle>
      {/* <SearchBarStyled setQuery={setQuery}></SearchBarStyled> */}
      <View style={{ flex: 1 }}>
        {
          /* <Search
          ref="search_box"
          /**
           * There many props that can customizable
           * Please scroll down to Props section
           */
          /> */
        }
      </View>
    </>
  );
};

export default SearchBar;
