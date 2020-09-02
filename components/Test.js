import React from "react";
import { observer } from "mobx-react";

// component
import AddList from "./MyList/AddList";
// store
import listStore from "../stores/listStore";
import authStore from "../stores/authStore";

// style
import { View, Text, Right, Spinner, Content, Body } from "native-base";
import { ScrollView, FlatList, Alert } from "react-native";
import MyListItem from "./MyList/MyListItem";
import { Button } from "react-native-paper";

const Test = ({ navigation }) => {
  if (listStore.loading) return <Spinner color="lightblue" />;

  const foundList = listStore.list.filter(
    (list) => list.userId === authStore.user.id
  );

  //   if (foundList.length === 0)
  //     return <Text onPress={<AddList />}> + Add list</Text>;
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          margin: 1,
        }}
      >
        <Button style={{ backgroundColor: "lightblue", width: 300 }}>
          <Text
            // onPress={listStore.addTrip(item.id)}

            style={{ color: "black" }}
          >
            {item.title}
          </Text>
        </Button>
      </View>
    );
  };
  return (
    <ScrollView>
      <FlatList
        data={foundList}
        style={{ flex: 1 }}
        renderItem={renderItem}
        numColumns={1}
      />
    </ScrollView>
  );
};

export default observer(Test);
