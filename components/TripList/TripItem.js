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
import { Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";

// component
import BottomSheetList from "../BottomSheetList";
import Test from "../Test";

// image
import Trip from "../../media/Trip.png";
import pic from "../../media/user.png";

// store
import authStore from "../../stores/authStore";
import Navigation from "../Navigation";
import MyList from "../MyList";

const TripItem = ({ trip, navigation }) => {
  const user = authStore.users.find((user) => user.id === trip.userId);
  const [openList, setOpenLis] = useState(false);
  const handleOpen = () => {
    setOpenLis(true);
  };

  const handleClose = () => {
    setOpenLis(false);
  };

  const BottomSheet = () => {};
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
        // subtitle="choose your list"
        headerIconComponent={<Icon name="pin" color="white" size="40" />}
      >
        <ScrollView>
          <Test />
          <SCLAlertButton theme="info" onPress={handleClose}>
            cancel
          </SCLAlertButton>
        </ScrollView>
      </SCLAlert>
    </>
  );
};

export default observer(TripItem);
