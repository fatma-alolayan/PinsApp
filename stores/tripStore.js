import { decorate, observable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
      this.trips = res.data;
      this.loading = false;
    } catch (error) {
      console.error("TripStore -> fetchTrips -> error", error);
    }
  };

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

decorate(TripStore, {
  trips: observable,
  loading: observable,
});

const tripStore = new TripStore();

tripStore.fetchTrips();

export default tripStore;
