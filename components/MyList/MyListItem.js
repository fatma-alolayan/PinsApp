import React from "react";
import { observer } from "mobx-react";

// store
import listStore from "../../stores/listStore";

// style
import { TrashIcon, EditIcon } from "./styles";
import { View, Text, Right, Spinner, Left } from "native-base";
import { Alert } from "react-native";

const MyListItem = ({ navigation, list }) => {
  if (listStore.loading) return <Spinner color="lightblue" />;

  const deleteAlert = () => {
    Alert.alert("Delete", "Are you sure you want to delete this list?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => listStore.deleteList(list.id) },
    ]);
  };

  return (
    // REVIEW: move inline styling to styles.js
    <View
      style={{
        flexDirection: "row",
        height: 40,
        paddingLeft: 50,
        borderBottomWidth: 0.3,
        borderColor: "#e9ecef",
      }}
    >
      <Left>
        <Text
          onPress={() =>
            navigation.navigate("MyListItemDetails", { list: list })
          }
          style={{
            color: "#3d5a80",
            fontSize: 14,
          }}
        >
          {list.title}
        </Text>
      </Left>

      {!list.defaultList && (
        <>
          <EditIcon
            name="edit"
            type="AntDesign"
            onPress={() => navigation.navigate("EditList", { _list: list })}
          />
          <TrashIcon name="trash" type="Ionicons" onPress={deleteAlert} />
        </>
      )}
    </View>
  );
};

export default observer(MyListItem);
