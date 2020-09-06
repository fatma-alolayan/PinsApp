import { decorate, observable } from "mobx";
import instance from "./instance";

// Store
import authStore from "./authStore";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
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
      const res = await instance.post(`/${authStore.user.id}/trip`, newTrip);
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
    } catch (error) {
      console.error("TripStore -> updatedTrip -> error", error);
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
