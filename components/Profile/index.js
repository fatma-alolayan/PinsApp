
import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";


import {
  Spinner,
  List,
  Container,
  Left,
  Thumbnail,
  Header,
  Content,
  Right,
  CardItem,
} from "native-base";
import authStore from "../../stores/authStore";
import { Title, Button, Card } from "react-native-paper";
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
import MyTripItem from "../MyTrip/MyTripItem";
import MyTrip from "../MyTrip";
import Trip from "../../media/Trip.png";
import { TextStyle, SmallText } from "./styles";
import pic from "../../media/user.png";
const numColumns = 2;


const Profile = ({ navigation }) => {

  if (tripStore.loading) return <Spinner color="lightblue" />;
  const user = authStore.user;
  const foundmyTrip = tripStore.trips.filter((trip) => trip.userId === user.id);

  // const myTrip = foundmyTrip.map((trip) => (
  //   <MyTripItem trip={trip} key={trip.id} user={user} navigation={navigation} />

  const numColumns = 3;

  const renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={{ color: "#fff" }} />;
    }

    return (
      <View
        style={{
          // backgroundColor: "#4D243D",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          margin: 1,
          height: Dimensions.get("window").width / numColumns,
        }}
      >
        {item.image ? (
          <Image
            source={{ uri: item.image }}
            style={{
              height: 100,
              width: 180,
            }}
          />
        ) : (
          <Image
            source={Trip}
            style={{
              height: 100,
              width: 180,
            }}
          />
        )}
        <Text
          onPress={() =>
            navigation.navigate("TripDetail", { trip: item, user })
          }
          style={{ color: "black" }}
        >
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <>

      {!authStore.user ? navigation.replace("Intro") : null}
      <Container>
        <Card>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            {user.image ? (
              <Thumbnail source={{ uri: user.image }} />
            ) : (
              <Thumbnail source={pic} />
            )}
            <Title
              // onPress={() => navigation.navigate("EditProfile", { user: user })}
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
              <Button onPress={() => navigation.navigate("AddTrip")}>
                <SmallText>add Trip</SmallText>
              </Button>
              <CardItem>
                <SmallText>pins </SmallText>
                <SmallText style={{ color: "blue" }}>
                  {foundmyTrip.length}
                </SmallText>
              </CardItem>
            </Right>
          </View>
        </Card>
        <Content>
          <ScrollView>
            {foundmyTrip.length === 0 ? (
              <TextStyle>No trips</TextStyle>
            ) : (
              <FlatList
                data={foundmyTrip}
                style={{ flex: 1, marginVertical: 20 }}
                renderItem={renderItem}
                numColumns={2}
              />
            )}
          </ScrollView>
          {/* {myTrip} */}
          {/* <MyTrip /> */}
        </Content>
      </Container>
    </>
  );
};

export default observer(Profile);
