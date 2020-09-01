import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class QAStore {
  qa = [];
  loading = true;

  fetchQA = async () => {
    try {
      const res = await instance.get("/qa");
      this.qa = res.data;
      this.qa = this.qa.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));

      this.loading = false;
    } catch (error) {
      console.error("QAStore -> fetchQA -> error", error);
    }
  };

  createQ = async (newQ) => {
    try {
      const formData = new FormData();

      for (const key in newQ) formData.append(key, newQ[key]);

      const res = await instance.post(`/trips//${newQ.tripId}/q`, newQ);
      const _Q = res.data; // no need to store in const, just push res.data directly
      this.qa.push(_Q);
    } catch (error) {
      console.error("QAStore -> createQ -> error", error);
    }
  };

  // delete this method
  deleteQA = async (qaId) => {
    try {
      await instance.delete(`/qa/${qaId}`);
      this.qa = this.qa.filter((qa) => qa.id !== +qaId);
    } catch (error) {
      console.error("QAStore -> deleteQA -> error", error);
    }
  };

  updateA = async (updatedA) => {
    try {
      const formData = new FormData();
      for (const key in updatedA) formData.append(key, updatedA[key]);
      console.log("formData", formData); // no console logs
      await instance.put(`/qa/${updatedA.id}`, updatedA);
      const qa = this.qa.find((qa) => qa.id === updatedA.id);
      for (const key in updatedA) qa[key] = updatedA[key];
    } catch (error) {
      console.error("QAStore -> updateA -> error", error);
    }
  };
}
decorate(QAStore, {
  qa: observable,
  loading: observable,
});

const qaStore = new QAStore();
qaStore.fetchQA();

export default qaStore;
