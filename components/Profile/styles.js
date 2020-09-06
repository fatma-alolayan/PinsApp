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
export const EditContainer = styled.View`
  flex: 1;
  background-color: white;
  padding-right: 60px;
  padding-left: 40px;
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
  margin-bottom: 12px;
  color: black;
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
  width: 170px;
`;
export const AuthButton = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  background-color: lightblue;
  width: 200;
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
  padding-top: 15;
`;
export const LabelTitle = styled.Text`
  color: black;
  font-size: 14px;
  border-bottom-color: black;
  /* padding-left: 20; */
  width: 100;
`;
