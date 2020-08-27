import React from "react";
import { observer } from "mobx-react";
import { ScrollView, Dimensions } from "react-native";
import { List, Spinner, Container, Card } from "native-base";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import authStore from "../../stores/authStore";

const { height } = Dimensions.get("window");
const TripList = ({ navigation }) => {
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  if (tripStore.loading) return <Spinner color="lightblue" />;

  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <ScrollView>
      <Container>
        <List>{tripList}</List>
      </Container>
    </ScrollView>
  );
};

export default observer(TripList);
