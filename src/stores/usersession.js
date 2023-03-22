import { defineStore } from "pinia";
import axios from "../axios-auth.js";

export const useUserSessionStore = defineStore("userSession", {
  state: () => ({
    token: "",
    username: "",
  }),
  getters: {
    isAuthenticated: (state) => state.token !== "",
  },
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        axios
          .post("/users/login", {
            username: username,
            password: password,
          })
          .then((response) => {
            this.token = response.data.token;
            this.username = response.data.username;
            axios.defaults.headers.common["Authorization"] =
              "Bearer" + this.token;
            console.log(response.data.token);
            resolve();
          })
          .catch((error) => {
            console.log(error);
            reject(error.response.data.errorMessage);
          });
      });
    },
  },
});
