import styled from "styled-components/native";
import { Icon } from "native-base";
import Editicon from "react-native-vector-icons/AntDesign";

export const TextStyle = styled.Text`
  color: #3d5a80;
  font-size: 18;
  text-align: center;
  padding-top: 15px;
`;
export const InputContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;
export const Title = styled.Text`
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: black;
`;
export const TextInputStyle = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: black;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;
export const InutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: lightblue;
  margin-top: 30px;
`;
export const ButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const SmallText = styled.Text`
  color: black;
  margin-top: 15px;
`;
export const TrashIcon = styled(Icon)`
  color: #9d0208;
  font-size: 18px;
  padding-right: 10;
  padding-top: 15;
`;
export const EditIcon = styled(Editicon)`
  font-size: 16px;
  padding-right: 10;
  color: grey;
  padding-top: 15;
`;
