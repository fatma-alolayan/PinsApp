import React, { useState } from "react";
import { observer } from "mobx-react";

// style
import { Text, CardItem } from "native-base";
import { Card } from "react-native-paper";
import { View, ScrollView } from "react-native";
import { TextInputStyle, SubmitButton } from "./styles";

// images
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// component
import Answer from "./Answer";

// store
import authStore from "../../stores/authStore";
import askStore from "../../stores/AskStore";

const Ask = ({ navigation, trip }) => {
  const foundAsk = askStore.ask.filter((ask) => ask.tripId === trip.id);

  const ask = foundAsk.map((ask) => (
    <Answer ask={ask} key={ask.id} trip={trip} navigation={navigation} />
  ));
  const [_ask, setAsk] = useState(false);

  const [questions, setQuestion] = useState({
    question: "",
    answer: "",
    userId: authStore.user.id,
    tripId: trip.id,
  });

  const handleQuestion = async () => {
    setAsk(false);
    await askStore.createQuestion(questions);
  };

  return (
    <ScrollView>
      {authStore.user.id !== trip.userId && (
        <>
          <Text style={{ paddingBottom: 20 }} onPress={() => setAsk(!_ask)}>
            ask me
            <Icon name="comment-question-outline" size="25" />
          </Text>

          {_ask && (
            <Card
              style={{
                borderColor: "lightgray",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <CardItem style={{ backgroundColor: "#f0efeb", paddingTop: 0 }}>
                <TextInputStyle
                  onChangeText={(question) =>
                    setQuestion({ ...questions, question })
                  }
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
          )}
        </>
      )}

      <View>{ask}</View>
    </ScrollView>
  );
};

export default observer(Ask);
