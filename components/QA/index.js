import React, { useState } from "react";
import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import pic from "../../media/user.png";

import {
  List,
  Spinner,
  Text,
  Right,
  Content,
  CardItem,
  Body,
  Thumbnail,
} from "native-base";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { TextInput, Card } from "react-native-paper";
import qaStore from "../../stores/qaStore";
import { View, FlatList, Dimensions, Image, ScrollView } from "react-native";
const QA = ({ navigation, trip }) => {
  const foundQA = qaStore.qa.filter((qa) => qa.tripId === trip.id);
  let counter = 1;
  const [askMe, setAskMe] = useState(false);
  const [answer, setAnswer] = useState(false);

  const reset = { q: "", a: "", userId: authStore.user.id, tripId: trip.id };
  const [question, setQ] = useState({
    q: "",
    a: "",
    userId: authStore.user.id,
    tripId: trip.id,
  });

  const handleSubmit = async () => {
    await qaStore.createQ(question);
    setAskMe(reset);
  };
  const numColumns = 1;

  const renderItem = ({ item }) => {
    const user = authStore.users.find((user) => item.userId === user.id);

    return (
      <Card>
        <CardItem style={{ backgroundColor: "lightgray" }}>
          <View style={{ flexDirection: "row" }}>
            <Thumbnail
              style={{ width: 20, height: 20 }}
              source={user.image ? { uri: user.image } : pic}
            />
            <Text style={{ fontSize: 14, paddingLeft: 10 }}>
              {user.username}
            </Text>
          </View>
        </CardItem>

        <CardItem style={{ backgroundColor: "lightgray", paddingTop: 0 }}>
          <Text>{counter++}. </Text>
          <Text style={{ color: "blue" }}>{item.q}</Text>

          <Body></Body>
          {authStore.user.id === trip.userId ? (
            <Right>
              <Icon
                onPress={() => setAnswer(!answer)}
                name="message-text-outline"
                size="25"
              />
            </Right>
          ) : null}
        </CardItem>
        <CardItem>
          {item.a ? <Text style={{ color: "black" }}>{item.a}</Text> : null}
        </CardItem>
      </Card>
    );
  };
  return (
    <ScrollView>
      {authStore.user.id !== trip.userId ? (
        <>
          <Text style={{ paddingBottom: 20 }} onPress={() => setAskMe(!askMe)}>
            ask me
            <Icon name="comment-question-outline" size="25" />
          </Text>
          {askMe ? (
            <>
              <TextInput
                onChangeText={(q) => setQ({ ...question, q })}
                // placeholder="q"

                placeholderTextColor="#A6AEC1"
              />
              <Text onPress={handleSubmit}>send</Text>
            </>
          ) : null}

          <Right></Right>
        </>
      ) : null}
      {answer ? <Text> ......</Text> : null}
      {foundQA.length !== 0 ? (
        <Content>
          <FlatList
            data={foundQA}
            style={{ flex: 1, marginVertical: 1 }}
            renderItem={renderItem}
            numColumns={1}
          />
        </Content>
      ) : null}
    </ScrollView>
  );
};

export default observer(QA);
