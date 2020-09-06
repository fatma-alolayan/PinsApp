import { decorate, observable } from "mobx";
import instance from "./instance";

// Store
import authStore from "./authStore";

class ListStore {
  list = [];
  loading = true;

  fetchList = async () => {
    try {
      const res = await instance.get("/list");
      this.list = res.data;
      this.list = this.list.sort((a, b) =>
        a.updatedAt < b.updatedAt ? 1 : -1
      );
      this.list = this.list.sort((a, b) =>
        a.defaultList < b.defaultList ? 1 : -1
      );
      this.loading = false;
    } catch (error) {
      console.error("ListStore -> fetchlist -> error", error);
    }
  };

  createList = async (newList) => {
    try {
      const formData = new FormData();
      for (const key in newList) formData.append(key, newList[key]);
      const res = await instance.post(`/${authStore.user.id}/list`, newList);
      this.list.push(res.data);
    } catch (error) {
      console.error("ListStore -> createList -> error", error);
    }
  };

  deleteList = async (listId) => {
    try {
      await instance.delete(`/list/${listId}`);
      this.list = this.list.filter((list) => list.id !== +listId);
    } catch (error) {
      console.error("ListStore -> deleteList -> error", error);
    }
  };

  updateList = async (updatedList) => {
    try {
      const formData = new FormData();
      for (const key in updatedList) formData.append(key, updatedList[key]);
      await instance.put(`/list/${updatedList.id}`, formData);
      const list = this.list.find((list) => list.id === updatedList.id);
      for (const key in updatedList) list[key] = updatedList[key];
    } catch (error) {
      console.error("ListStore -> updateList -> error", error);
    }
  };
}
decorate(ListStore, {
  list: observable,
  loading: observable,
});

const listStore = new ListStore();

listStore.fetchList();

export default listStore;
