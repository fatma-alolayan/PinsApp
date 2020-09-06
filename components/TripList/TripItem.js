import React, { useState } from "react";

// Styling
import { TripItemStyled } from "./styles";
import { observer } from "mobx-react";
import {
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Button,
  Text,
  View,
  Right,
} from "native-base";
import { Image, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";

// image
import Trip from "../../media/Trip.png";
import pic from "../../media/user.png";

// store
import authStore from "../../stores/authStore";
import listStore from "../../stores/listStore";
import listTripStore from "../../stores/listTripStore";

const TripItem = ({ trip, navigation }) => {
  if (listStore.loading) return <Spinner color="lightblue" />;
  if (listTripStore.loading) return <Spinner color="lightblue" />;

  const user = authStore.users.find((user) => user.id === trip.userId);
  const [openList, setOpenList] = useState(false);

  const handleOpen = () => {
    setOpenList(true);
  };

  const handleClose = () => {
    setOpenList(false);
  };

  const foundList = listStore.list.filter(
    (list) => list.userId === authStore.user.id && !list.defaultList
  );

  const addListTrip = (item) => {
    const foundList = listTripStore.listTrip.find(
      (list) => list.listId === item.id && list.tripId === trip.id
    );

    if (!foundList) {
      const newListTrip = {
        listId: item.id,
        tripId: trip.id,
      };
      listTripStore.createListTrip(newListTrip);
      handleClose();
    } else handleClose();
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          margin: 1,
        }}
      >
        <Button style={{ backgroundColor: "lightblue", width: 300 }}>
          <Text style={{ color: "black" }} onPress={() => addListTrip(item)}>
            {item.title}
          </Text>
        </Button>
      </View>
    );
  };
  return (
    <>
      <Card>
        <CardItem>
          <View style={{ flexDirection: "row" }}>
            <Thumbnail small source={user.image ? { uri: user.image } : pic} />
            <TripItemStyled
              style={{ marginTop: 9, marginLeft: 10 }}
              onPress={() => navigation.navigate("Profile", { user: user })}
            >
              {user.username}
            </TripItemStyled>
          </View>
        </CardItem>
        <CardItem style={{ paddingTop: 0 }}>
          <Body style={{ alignItems: "center" }}>
            <Image
              style={{
                height: 200,
                width: 380,
                flex: 1,
              }}
              source={trip.image ? { uri: trip.image } : Trip}
            />
          </Body>
        </CardItem>

        <CardItem style={{ paddingTop: 0 }}>
          <Left>
            <Button
              transparent
              textStyle={{ color: "#87838B" }}
              onPress={handleOpen}
            >
              <Icon name="playlist-plus" color="grey" size="18" />
            </Button>
          </Left>
          <Right>
            <Text note>{moment(trip.createdAt).format("MMM Do YYYY")}</Text>
          </Right>
        </CardItem>
        <TripItemStyled
          onPress={() => navigation.navigate("TripDetail", { trip, user })}
        >
          {trip.title}
        </TripItemStyled>

        <CardItem></CardItem>
      </Card>
      <SCLAlert
        theme="info"
        show={openList}
        onRequestClose={handleClose}
        title="choose your list"
        subtitle="choose your list"
        headerIconComponent={<Icon name="pin" color="white" size="40" />}
      >
        <ScrollView style={{ height: 95 }}>
          <FlatList
            data={foundList}
            style={{ flex: 1 }}
            renderItem={renderItem}
            numColumns={1}
          />
        </ScrollView>

        <Text
          onPress={() => {
            handleClose();
            navigation.navigate("AddList");
          }}
        >
          + Add List
        </Text>
        <SCLAlertButton theme="info" onPress={handleClose}>
          cancel
        </SCLAlertButton>
      </SCLAlert>
    </>
  );
};

export default observer(TripItem);
