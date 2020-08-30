import React, { useState } from "react";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
import { List, Spinner, Text, Right } from "native-base";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { TextInput } from "react-native-paper";
import qaStore from "../../stores/qaStore";

const QA = ({ navigation, trip }) => {
  //   if (qaStore.loading) return <Spinner color="lightblue" />;

  //   const tripList = tripStore.trips.map((trip) => (
  //     <TripItem trip={trip} key={trip.id} navigation={navigation} />
  //   ));
  //   if (tripList.length === 0) return <TextStyle>No Trips</TextStyle>;
  const reset = { q: "", a: "", userId: authStore.user.id, tripId: trip.id };
  const [qustion, setQ] = useState(reset);

  const handleSubmit = async () => {
    console.log(",,,,,,Qustion", Qustion);
    await qaStore.createQ(Qustion);
    setQ(reset);
  };

  return (
    <ScrollView>
      {authStore.user.id !== trip.userId ? (
        <>
          <Text>ask me !</Text>
          <TextInput
            onChangeText={(q) => setQ({ ...qustion, q })}
            placeholder="q"
            placeholderTextColor="#A6AEC1"
          />
          <Right>
            <Text onPress={handleSubmit}>send</Text>
          </Right>
        </>
      ) : null}
    </ScrollView>
  );
};

export default observer(QA);
