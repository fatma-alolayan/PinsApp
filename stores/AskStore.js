import { decorate, observable } from "mobx";
import instance from "./instance";

class AskStore {
  ask = [];
  loading = true;

  fetchAsk = async () => {
    try {
      const res = await instance.get("/ask");
      this.ask = res.data;
      this.ask = this.ask.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
      this.loading = false;
    } catch (error) {
      console.error("AskStore -> fetchAsk -> error", error);
    }
  };

  createQuestion = async (newQuestion) => {
    try {
      const formData = new FormData();
      for (const key in newQuestion) formData.append(key, newQuestion[key]);
      const res = await instance.post(
        `/trips/${newQuestion.tripId}`,
        newQuestion
      );
      this.ask.push(res.data);
    } catch (error) {
      console.error("AskStore -> createQuestion -> error", error);
    }
  };

  deleteAsk = async (askId) => {
    try {
      await instance.delete(`/ask/${askId}`);
      this.ask = this.ask.filter((ask) => ask.id !== +askId);
    } catch (error) {
      console.error("AskStore -> deleteAsk -> error", error);
    }
  };

  updateAnswer = async (updatedAnswer) => {
    try {
      const formData = new FormData();
      for (const key in updatedAnswer) formData.append(key, updatedAnswer[key]);
      await instance.put(`/ask/${updatedAnswer.id}`, updatedAnswer);
      const ask = this.ask.find((ask) => ask.id === updatedAnswer.id);
      for (const key in updatedAnswer) ask[key] = updatedAnswer[key];
    } catch (error) {
      console.error("AskStore -> updateAnswer -> error", error);
    }
  };
}
decorate(AskStore, {
  ask: observable,
  loading: observable,
});

const askStore = new AskStore();
askStore.fetchAsk();

export default askStore;
