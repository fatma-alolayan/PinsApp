import React, { useState } from "react";
import { observer } from "mobx-react";

// styls
import { Text, Right, Body, Card, CardItem, Thumbnail } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MultiLineInput, SubmitButton, SmallText } from "./styles";

// image
import pic from "../../media/user.png";

// store
import askStore from "../../stores/AskStore";
import { View } from "react-native-animatable";
import authStore from "../../stores/authStore";

const Answer = ({ navigation, ask, trip }) => {
  const [editAnswer, setEditAnswer] = useState(ask);
  const [addAnswer, setAddAnswer] = useState(false);

  const user = authStore.users.find((user) => ask.userId === user.id);

  const handleAnswer = async () => {
    setAddAnswer(!addAnswer);
    await askStore.updateAnswer(editAnswer);
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
        {authStore.user.id === trip.userId && (
          <>
            <Body></Body>
            <Right>
              <Icon
                onPress={() => setAddAnswer(!addAnswer)}
                name="message-text-outline"
                size="20"
              />
              <SmallText>Reply</SmallText>
            </Right>
          </>
        )}
      </CardItem>

      <CardItem style={{ backgroundColor: "#f0efeb", paddingTop: 0 }}>
        <Text style={{ color: "blue" }}>{ask.question}</Text>

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
          <Text style={{ color: "black" }}>{ask.answer}</Text>
        </CardItem>
      )}
    </Card>
  );
};

export default observer(Answer);
