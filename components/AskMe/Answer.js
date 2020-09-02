import React, { useState } from "react";
import { observer } from "mobx-react";

// styls
import {
  Text,
  Right,
  Left,
  Body,
  Card,
  CardItem,
  Thumbnail,
} from "native-base";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// image
import pic from "../../media/user.png";

// style
import { MultiLineInput, SubmitButton, SmallText } from "./styles";

// store
import askMeStore from "../../stores/AskMeStore";
import { View } from "react-native-animatable";
import authStore from "../../stores/authStore";

const Answer = ({ navigation, askMe, trip }) => {
  const [editAnswer, setEditAnswer] = useState(askMe);
  const [addAnswer, setAddAnswer] = useState(false);

  const user = authStore.users.find((user) => askMe.userId === user.id);

  const handleAnswer = async () => {
    setAddAnswer(!addAnswer);
    await askMeStore.updateAnswer(editAnswer);
  };
  return (
    <Card
      style={{
        borderColor: "lightgray",
        borderWidth: 1,
        marginBottom: 10,
      }}
    >
      <CardItem style={{ backgroundColor: "#f0efeb" }}>
        <View style={{ flexDirection: "row" }}>
          <Thumbnail
            style={{ width: 20, height: 20 }}
            source={user.image ? { uri: user.image } : pic}
          />
          <Text style={{ fontSize: 14, paddingLeft: 10 }}>{user.username}</Text>
        </View>
        {authStore.user.id === trip.userId ? (
          <>
            <Body></Body>
            <Right>
              <Icon
                onPress={() => setAddAnswer(!addAnswer)}
                name="message-text-outline"
                size="20"
              />
              <SmallText>Replay</SmallText>
            </Right>
          </>
        ) : null}
      </CardItem>

      <CardItem style={{ backgroundColor: "#f0efeb", paddingTop: 0 }}>
        <Text style={{ color: "blue" }}>{askMe.question}</Text>

        <Body></Body>
      </CardItem>
      {addAnswer ? (
        <>
          <View>
            <MultiLineInput
              onChangeText={(answer) =>
                setEditAnswer({ ...editAnswer, answer })
              }
              placeholder="answer"
              placeholderTextColor="#A6AEC1"
              multiline={true}
              value={editAnswer.answer}
            />

            <SubmitButton>
              <Text style={{ fontSize: 14 }} onPress={handleAnswer}>
                send
              </Text>
            </SubmitButton>
          </View>
        </>
      ) : (
        <CardItem>
          {askMe.answer ? (
            <Text style={{ color: "black" }}>{askMe.answer}</Text>
          ) : null}
        </CardItem>
      )}
    </Card>
  );
};

export default observer(Answer);
