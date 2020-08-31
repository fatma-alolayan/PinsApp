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
import qaStore from "../../stores/qaStore";
import { View } from "react-native-animatable";
import authStore from "../../stores/authStore";

const Answer = ({ navigation, qa, trip }) => {
  const [answer, setA] = useState(qa);

  const handleAnswer = async () => {
    setAddAnswer(!addAnswer);
    await qaStore.updateA(answer);
  };

  const [addAnswer, setAddAnswer] = useState(false);
  const user = authStore.users.find((user) => qa.userId === user.id);

  const [question, setQ] = useState({
    q: "",
    a: "",
    userId: qa.userId,
    tripId: qa.tripId,
  });
  console.log("qa.userId", qa.userId);

  const handleQuestion = async () => {
    await qaStore.createQ(question);
    setAskMe(false);
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
      </CardItem>

      <CardItem style={{ backgroundColor: "#f0efeb", paddingTop: 0 }}>
        <Text style={{ color: "blue" }}>{qa.q}</Text>

        <Body></Body>
        {authStore.user.id === trip.userId ? (
          <>
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
      {addAnswer ? (
        <>
          <View>
            <MultiLineInput
              onChangeText={(a) => setA({ ...answer, a })}
              placeholder="answer"
              placeholderTextColor="#A6AEC1"
              multiline={true}
              value={answer.a}
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
          {qa.a ? <Text style={{ color: "black" }}>{qa.a}</Text> : null}
        </CardItem>
      )}
    </Card>
  );
};

export default observer(Answer);
