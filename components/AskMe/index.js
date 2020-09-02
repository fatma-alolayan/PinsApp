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
import askMeStore from "../../stores/AskMeStore";

const AskMe = ({ navigation, trip }) => {
  const foundAskMe = askMeStore.askMe.filter(
    (askMe) => askMe.tripId === trip.id
  );

  const askMe = foundAskMe.map((askMe) => (
    <Answer askMe={askMe} key={askMe.id} trip={trip} navigation={navigation} />
  ));
  let counter = 1;
  const [_askMe, setAskMe] = useState(false);

  const [questions, setQuestion] = useState({
    question: "",
    answer: "",
    userId: authStore.user.id,
    tripId: trip.id,
  });

  const handleQuestion = async () => {
    setAskMe(false);
    await askMeStore.createQuestion(questions);
  };

  return (
    <ScrollView>
      {authStore.user.id !== trip.userId ? (
        <>
          <Text style={{ paddingBottom: 20 }} onPress={() => setAskMe(!_askMe)}>
            ask me
            <Icon name="comment-question-outline" size="25" />
          </Text>

          {_askMe ? (
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
          ) : null}
        </>
      ) : null}

      <View>{askMe}</View>
    </ScrollView>
  );
};

export default observer(AskMe);
