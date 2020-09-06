import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const SubmitButton = styled(Button)`
  width: 80;
  height: 40;
  align-self: center;
  border-color: lightgrey;
  border-width: 1px;
  width: 350;
  border-radius: 10px;
`;

export const MultiLineInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 180px;
  margin-bottom: 5px;
  border-color: lightgrey;
  padding: 10px;
`;

export const TextInputStyle = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 10px;
  border-color: lightgrey;
  border-bottom-width: 1px;
`;
export const SmallText = styled.Text`
  font-size: 12;
`;
