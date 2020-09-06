import { decorate, observable } from "mobx";
import instance from "./instance";

class ListTripStore {
  listTrip = [];
  loading = true;

  fetchListTrip = async () => {
    try {
      const res = await instance.get("/listtrip");
      this.listTrip = res.data;
      this.listTrip = this.listTrip.sort((a, b) =>
        a.updatedAt < b.updatedAt ? 1 : -1
      );
      this.loading = false;
    } catch (error) {
      console.error("ListTripStore -> fetchListTrip -> error", error);
    }
  };

  createListTrip = async (newListTrip) => {
    try {
      const formData = new FormData();
      for (const key in newListTrip) formData.append(key, newListTrip[key]);
      const res = await instance.post(
        `/list/${newListTrip.listId}/`,
        newListTrip
      );
      this.listTrip.push(res.data);
    } catch (error) {
      console.error("ListTripStore -> createListTrip -> error", error);
    }
  };

  deleteListTrip = async (listTrip) => {
    try {
      await instance.delete(
        `/list/${listTrip.listId}/trips/${listTrip.tripId}`
      );
      this.listTrip = this.listTrip.filter(
        (_listTrip) => _listTrip !== listTrip
      );
    } catch (error) {
      console.error("ListTripStore -> deleteListTrip -> error", error);
    }
  };

  updateListTrip = async (updatedListTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedListTrip)
        formData.append(key, updatedListTrip[key]);
      await instance.put(`/listTrip/${updatedListTrip.id}`, formData);
      const listTrip = this.listTrip.find(
        (listTrip) => listTrip.id === updatedListTrip.id
      );
      for (const key in updatedListTrip) list[key] = updatedListTrip[key];
    } catch (error) {
      console.error("ListTripStore -> updateListTrip -> error", error);
    }
  };
}
decorate(ListTripStore, {
  listTrip: observable,
  loading: observable,
});
const listTripStore = new ListTripStore();
listTripStore.fetchListTrip();

export default listTripStore;
