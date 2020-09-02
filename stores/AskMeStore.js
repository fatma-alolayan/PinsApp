import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class AskMeStore {
  askMe = [];
  loading = true;

  fetchAskMe = async () => {
    try {
      const res = await instance.get("/askme");
      this.askMe = res.data;
      this.askMe = this.askMe.sort((a, b) =>
        a.updatedAt < b.updatedAt ? 1 : -1
      );

      this.loading = false;
    } catch (error) {
      console.error("AskMeStore -> fetchAskMe -> error", error);
    }
  };

  createQuestion = async (newQuestion) => {
    try {
      const formData = new FormData();

      for (const key in newQuestion) formData.append(key, newQuestion[key]);
      const res = await instance.post(
        `/trips/${newQuestion.tripId}/askme`,
        newQuestion
      );
      const question = res.data;
      this.askMe.push(question);
    } catch (error) {
      console.error("AskMeStore -> createQuestion -> error", error);
    }
  };

  deleteAskMe = async (askMeId) => {
    try {
      await instance.delete(`/askme/${askMeId}`);
      this.askMe = this.askMe.filter((askMe) => askMe.id !== +askMeId);
    } catch (error) {
      console.error("AskkMeStore -> deleteAskMe -> error", error);
    }
  };

  updateAnswer = async (updatedAnswer) => {
    try {
      const formData = new FormData();
      for (const key in updatedAnswer) formData.append(key, updatedAnswer[key]);
      console.log("formData", formData);
      await instance.put(`/askme/${updatedAnswer.id}`, updatedAnswer);
      const askMe = this.askMe.find((askMe) => askMe.id === updatedAnswer.id);
      for (const key in updatedAnswer) askMe[key] = updatedAnswer[key];
    } catch (error) {
      console.error("AskMeStore -> updateAnswer -> error", error);
    }
  };
}
decorate(AskMeStore, {
  askMe: observable,
  loading: observable,
});

const askMeStore = new AskMeStore();
askMeStore.fetchAskMe();

export default askMeStore;
