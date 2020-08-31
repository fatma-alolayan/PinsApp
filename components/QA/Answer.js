import React, { useState } from "react";
import { observer } from "mobx-react";
import { Text, Right, Left, Body } from "native-base";
import { TextInput, Button } from "react-native-paper";

// store
import qaStore from "../../stores/qaStore";
import { View } from "react-native-animatable";
const Answer = ({ navigation, qa }) => {
  const [answer, setA] = useState(qa);

  const handleAnswer = async () => {
    await qaStore.updateA(answer);
    setA(reset);
    navigation.goBack();
  };
  const numColumns = 1;

  return (
    <>
      <View>
        <TextInput
          onChangeText={(a) => setA({ ...answer, a })}
          placeholder="answer"
          placeholderTextColor="#A6AEC1"
          value={answer.a}
        />

        <Left></Left>

        <Right>
          <Button
            style={{
              borderColor: "grey",
              borderWidth: 1,
              width: 80,
              height: 40,
            }}
          >
            <Text style={{ fontSize: 14 }} onPress={handleAnswer}>
              send
            </Text>
          </Button>
        </Right>
      </View>
    </>
  );
};

export default observer(Answer);
