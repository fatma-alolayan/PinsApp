import { decorate, observable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
      // REVIEW: Remove the extra spacing

      this.trips = res.data;

      this.trips = this.trips.sort((a, b) =>
        a.updatedAt < b.updatedAt ? 1 : -1
      );

      this.loading = false;
    } catch (error) {
      console.error("TripStore -> fetchTrips -> error", error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const res = await instance.post("/trips", newTrip);
      this.trips.push(res.data);
    } catch (error) {
      console.error("TripStore -> createTrip -> error", error);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== +tripId);
    } catch (error) {

      console.error("TripStore -> deleteTrip -> error", error);
    }
  };


  updateTrip = async (updatedTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
      await instance.put(`/trips/${updatedTrip.id}`, formData);
      const trip = this.trips.find((trip) => trip.id === updatedTrip.id);
      for (const key in updatedTrip) trip[key] = updatedTrip[key];
      // trip.image = URL.createObjectURL(updatedTrip.image);
    } catch (error) {
      console.error("TripStore -> updatedTrip -> error", error);
    }
  };
}
decorate(TripStore, {
  trips: observable,
  loading: observable,
});

const tripStore = new TripStore();

tripStore.fetchTrips();

export default tripStore;
