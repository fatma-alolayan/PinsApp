import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";

// Store
import listStore from "./listStore";

class AuthStore {
  user = null;
  users = null;
  loading = true;

  fetchUser = async () => {
    try {
      const res = await instance.get("/");
      this.users = res.data;
      this.loading = false;
    } catch (error) {
      console.error("Userstore -> fetchUsers -> error", error);
    }
  };

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token); // await
      listStore.list.push(res.data.defultList);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      await this.setUser(res.data.token);
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
        this.setUser(token); // await
      } else {
        this.signout();
      }
    }
  };
  updateUser = async (updatedUser) => {
    try {
      const formData = new FormData();
      for (const key in updatedUser) formData.append(key, updatedUser[key]);
      await instance.put(`/${updatedUser.id}`, formData);
      const user = this.users.find((user) => user.id === updatedUser.id);
      this.user = updatedUser;
    } catch (error) {
      console.error("AuthStore -> updatedUser -> error", error);
    }
  };
}

decorate(AuthStore, {
  user: observable,
  users: observable,
});
const authStore = new AuthStore();
authStore.checkForToken();
authStore.fetchUser();

export default authStore;
