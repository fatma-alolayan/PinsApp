import { decorate, observable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
      // console.log("\\\\\\\\\\\\", res);
      this.trips = res.data;
      this.loading = false;
      // console.log("\\\\\\\\\\\\this.loading", this.loading);
    } catch (error) {
      console.error("TripStore -> fetchTrips -> error", error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      console.log("0000000newTrip", newTrip);

      for (const key in newTrip) formData.append(key, newTrip[key]);

      const res = await instance.post("/trips", newTrip);
      console.log("0000000res", res);
      // authStore.user.tripSlug = res.data.slug;

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
      console.error("ShopStore -> deleteShop -> error", error);
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
