import React, { useState } from "react";
import { observer } from "mobx-react";

// style
import { View, Image, ScrollView } from "react-native";
import {
  Spinner,
  Container,
  Thumbnail,
  Content,
  Right,
  CardItem,
} from "native-base";
import { Title, Button, Card } from "react-native-paper";
import { TextStyle, SmallText } from "./styles";
// image
import pic from "../../media/user.png";
import pin from "../../media/pin.png";

// store
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
// component
import ProfileItem from "./ProfileItem";
const numColumns = 2;

const Profile = ({ navigation, route }) => {
  let user = authStore.user;
  if (route.params) user = route.params.user;

  if (tripStore.loading) return <Spinner color="lightblue" />;
  const foundmyTrip = tripStore.trips.filter((trip) => trip.userId === user.id);

  return (
    <>
      {!authStore.user ? navigation.replace("Intro") : null}
      <Container>
        <Card>
          <View
            style={{ flexDirection: "row", marginTop: 10, paddingLeft: 20 }}
          >
            <Thumbnail source={user.image ? { uri: user.image } : pic} />

            <Title
              style={{
                fontSize: 16,
                marginTop: 15,
                color: "black",
                marginLeft: 10,
              }}
            >
              {user.username}
            </Title>
            <Right>
              {user === authStore.user ? (
                <Button onPress={() => navigation.navigate("AddTrip")}>
                  <SmallText>add Trip</SmallText>
                </Button>
              ) : null}

              <CardItem style={{ paddingTop: 0 }}>
                <SmallText style={{ color: "black" }}>
                  {foundmyTrip.length}
                </SmallText>
                <Image
                  source={pin}
                  style={{
                    width: 20,
                    height: 30,
                  }}
                />
              </CardItem>
            </Right>
          </View>
        </Card>
        <Content>
          <ScrollView>
            {foundmyTrip.length === 0 ? (
              <TextStyle>No trips</TextStyle>
            ) : (
              <ProfileItem
                trip={foundmyTrip}
                user={user}
                navigation={navigation}
              />
            )}
          </ScrollView>
        </Content>
      </Container>
    </>
  );
};

export default observer(Profile);
