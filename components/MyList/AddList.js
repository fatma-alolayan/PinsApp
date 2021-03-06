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
  const [errorListExist, setErrorListExist] = useState(false);
  const [errorEmptyTitle, setErrorEmptyTitle] = useState(false);

  const handleSubmit = async () => {
    setErrorEmptyTitle(false);
    setErrorListExist(false);
    const foundList = listStore.list.find(
      (_list) =>
        _list.title === list.title && _list.userId === authStore.user.id
    );

    if (!foundList) {
      if (list.title !== "") {
        await listStore.createList(list);
        navigation.navigate("Home");
      } else {
        setErrorEmptyTitle(true);
      }
    } else setErrorListExist(true);
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
      {errorListExist && (
        <TextStyle style={{ color: "red" }}>
          List title already exists
        </TextStyle>
      )}
      {errorEmptyTitle && (
        <TextStyle style={{ color: "red" }}>
          The list title cannot be empty
        </TextStyle>
      )}
      <InutButton onPress={handleSubmit}>
        <ButtonText>Add</ButtonText>
      </InutButton>
      <SmallText onPress={() => navigation.navigate("Home")}>Cancel</SmallText>
    </InputContainer>
  );
};

export default observer(AddList);
