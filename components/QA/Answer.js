import React, { useState } from "react";
import { observer } from "mobx-react";
import { Text } from "native-base";
import { TextInput } from "react-native-paper";

// store
import qaStore from "../../stores/qaStore";
const Answer = ({ navigation, qa }) => {
  //   const foundQA = qaStore.qa.filter((q) => q.Id === qa.id);

  const [answer, setA] = useState(qa);

  const handleAnswer = async () => {
    await qaStore.updateA(answer);
    setA(reset);
    navigation.goBack();
  };
  const numColumns = 1;

  return (
    <>
      <TextInput
        onChangeText={(a) => setA({ ...answer, a })}
        placeholder="answer"
        placeholderTextColor="#A6AEC1"
        value={answer.a}
      />
      <Text onPress={handleAnswer}>send</Text>
    </>
  );
};

export default observer(Answer);
