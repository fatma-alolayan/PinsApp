import React, { useState } from "react";
import { observer } from "mobx-react";

//store
import listStore from "../../stores/listStore";
import authStore from "../../stores/authStore";

//styles
import {
  InputContainer,
  Title,
  TextInputStyle,
  InutButton,
  ButtonText,
  SmallText,
  AuthMultiLineInput,
} from "./styles";
import { TextStyle } from "./styles";

const AddList = ({ navigation }) => {
  const [list, setList] = useState({ title: "" });

  const handleSubmit = async () => {
    await listStore.createList(list);

    navigation.goBack();
  };

  return (
    <InputContainer>
      <Title>New List</Title>
      <TextStyle>Title</TextStyle>
      <TextInputStyle
        onChangeText={(title) => setList({ ...list, title })}
        placeholder="title"
        placeholderTextColor="#A6AEC1"
        value={list.title}
      />

      <InutButton onPress={handleSubmit}>
        <ButtonText>Add</ButtonText>
      </InutButton>
      <SmallText onPress={() => navigation.navigate("Profile")}>
        Cancel
      </SmallText>
    </InputContainer>
  );
};

export default observer(AddList);
