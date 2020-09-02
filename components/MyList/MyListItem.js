import React from "react";
import { observer } from "mobx-react";

// component

// store
import listStore from "../../stores/listStore";
import authStore from "../../stores/authStore";

// style
import { TextStyle, TrashIcon } from "./styles";
import {
  View,
  Text,
  Right,
  Spinner,
  CardItem,
  Content,
  Body,
} from "native-base";
import { FlatList, ScrollView } from "react-native";
import { Card } from "react-native-paper";

const MyListItem = ({ navigation, list }) => {
  if (listStore.loading) return <Spinner color="lightblue" />;

  return (
    <Content>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          margin: 1,
        }}
      >
        <Card style={{ width: 350, height: 60, margin: 5 }}>
          <CardItem>
            <Text
              // onPress={() =>
              //   navigation.navigate("TripDetail", { trip: item, user })
              // }
              style={{ color: "black", padding: 10 }}
            >
              {list.title}
            </Text>
            <Body></Body>
            <Right>
              <TrashIcon
                name="trash"
                type="Ionicons"
                onPress={() => listStore.deleteList(list.id)}
              />
            </Right>
          </CardItem>
        </Card>
      </View>
    </Content>
  );
};

export default observer(MyListItem);
