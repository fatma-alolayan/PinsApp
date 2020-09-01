import React, { useState } from "react";
import { observer } from "mobx-react";

// style
import { Text, Right, Content, CardItem, Body, Thumbnail } from "native-base";
import { Card } from "react-native-paper";
import { View, ScrollView } from "react-native";
import { TextInputStyle, SubmitButton } from "./styles";

// image
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import pic from "../../media/user.png";

// component
import Answer from "./Answer";

// store
import authStore from "../../stores/authStore";
import qaStore from "../../stores/qaStore";

const QA = ({ navigation, trip }) => {
  const foundQA = qaStore.qa.filter((qa) => qa.tripId === trip.id);
  // don't store the .filter() in foundQA. chain the .filter() with .map() and put them in one line.
  const qa = foundQA.map((qa) => (
    <Answer qa={qa} key={qa.id} trip={trip} navigation={navigation} />
  ));
  let counter = 1; // not used, remove it
  const [askMe, setAskMe] = useState(false);
  const [answer, setAnswer] = useState(false); // not used remove it

  const reset = { q: "", a: "", userId: authStore.user.id, tripId: trip.id }; // not used remove it
  const [question, setQ] = useState({
    q: "",
    a: "",
    userId: authStore.user.id,
    tripId: trip.id,
  });

  const handleQuestion = async () => {
    setAskMe(false);
    await qaStore.createQ(question);
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
            <Card
              style={{
                borderColor: "lightgray",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <CardItem style={{ backgroundColor: "#f0efeb", paddingTop: 0 }}>
                <TextInputStyle
                  onChangeText={(q) => setQ({ ...question, q })}
                  placeholderTextColor="#A6AEC1"
                  placeholder="Question"
                  multiline={true}
                />
              </CardItem>
              <SubmitButton>
                <Text style={{ fontSize: 14 }} onPress={handleQuestion}>
                  send
                </Text>
              </SubmitButton>
            </Card>
          ) : null}
        </>
      ) : null}

      <View>{qa}</View>
    </ScrollView>
  );
};

export default observer(QA);
