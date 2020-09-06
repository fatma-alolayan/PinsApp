import React from "react";
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

// images
import pic from "../../media/user.png";
import pin from "../../media/pin.png";

// store
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

// component
import ProfileItem from "./ProfileItem";

const Profile = ({ navigation, route }) => {
  let user = authStore.user;
  if (route.params) user = route.params.user;

  if (tripStore.loading) return <Spinner color="lightblue" />;
  const trips = tripStore.trips.filter((trip) => trip.userId === user.id);

  return (
    <>
      <Container>
        <Card>
          <View
            style={{ flexDirection: "row", marginTop: 10, paddingLeft: 20 }}
          >
            <Thumbnail source={user.image ? { uri: user.image } : pic} />
            <View>
              <Title
                style={{
                  fontSize: 16,
                  marginTop: 15,
                  color: "black",
                  marginLeft: 10,
                  marginBottom: 0,
                }}
              >
                {user.username}
              </Title>
              <Title
                style={{
                  fontSize: 14,
                  marginTop: 0,
                  color: "grey",
                  marginLeft: 15,
                }}
              >
                {user.bio}
              </Title>
            </View>
            <Right>
              {user === authStore.user && (
                <Button onPress={() => navigation.navigate("AddTrip")}>
                  <SmallText>add Trip</SmallText>
                </Button>
              )}

              <CardItem style={{ paddingTop: 0 }}>
                <SmallText style={{ color: "black" }}>{trips.length}</SmallText>
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
            {!trips.length ? (
              <TextStyle>No trips</TextStyle>
            ) : (
              <ProfileItem trip={trips} user={user} navigation={navigation} />
            )}
          </ScrollView>
        </Content>
      </Container>
    </>
  );
};

export default observer(Profile);
