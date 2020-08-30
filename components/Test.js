import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

const App = () => {
  const data = [
    { key: "A", title: "eee" },
    { key: "B", title: "eee" },
    { key: "C", title: "eee" },
    { key: "D", title: "eee" },
    { key: "E", title: "eee" },
    { key: "F", title: "eee" },
    { key: "G", title: "eee" },
    { key: "H", title: "eee" },
    { key: "I", title: "eee" },
    { key: "J", title: "eee" },
  ];
  const numColumns = 3;

  const renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={{ color: "#fff" }} />;
    }

    return (
      <View
        style={{
          backgroundColor: "#4D243D",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          margin: 1,
          height: Dimensions.get("window").width / numColumns,
        }}
      >
        {/* <Thumbnail source={item.image} /> */}
        <Text style={{ color: "#fff" }}>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      style={{ flex: 1, marginVertical: 20 }}
      renderItem={renderItem}
      numColumns={3}
    />
  );
};

export default App;
