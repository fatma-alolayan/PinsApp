import styled from "styled-components/native";
import { Icon, Button } from "native-base";

export const TextStyle = styled.Text`
  color: navy;
  font-size: 24;
  text-align: center;
  padding-top: 100px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
  border-bottom-color: black;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 20px;
  margin-bottom: 20px;
  color: black;
  border-bottom-color: black;
  border-bottom-width: 1px;
  width: 200px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: lightblue;
  margin-top: 20px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: black;
  margin-top: 15px;
`;
export const TrashIcon = styled(Icon)`
  color: red;
`;

export const SmallText = styled.Text`
  font-size: 10;
  font-weight: bold;
  color: black;
  margin-left: 10;
`;
export const LabelTitle = styled.Text`
  color: black;
  font-size: 16px;
  border-bottom-color: black;
  padding-right: 20;
`;
