import React from "react";
import { observer } from "mobx-react";

// component

// store
import listStore from "../../stores/listStore";
import authStore from "../../stores/authStore";

// style
import { TextStyle } from "./styles";
import { View, Text, Right, Spinner, Content, Body } from "native-base";
import { ScrollView } from "react-native";
import MyListItem from "./MyListItem";

const MyList = ({ navigation }) => {
  if (listStore.loading) return <Spinner color="lightblue" />;

  const foundList = listStore.list.filter(
    (list) => list.userId === authStore.user.id
  );

  const myList = foundList.map((list) => (
    <MyListItem list={list} key={list.id} />
  ));

  return (
    <Content>
      <View style={{ flexDirection: "row" }}>
        <Body>
          <TextStyle>My List</TextStyle>
        </Body>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Right>
          <TextStyle
            style={{ padding: 10 }}
            onPress={() => navigation.navigate("AddList")}
          >
            + new list
          </TextStyle>
        </Right>
      </View>
      <ScrollView>{myList}</ScrollView>
    </Content>
  );
};

export default observer(MyList);
