import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";

class AuthStore {
  user = null;

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    this.user = null;
    AsyncStorage.removeItem("myToken");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}
decorate(AuthStore, { user: observable });

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
