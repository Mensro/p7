import { createStore } from "vuex";
const persistedState = localStorage.getItem("store");

const store = createStore({
  state: persistedState
    ? JSON.parse(persistedState)
    : {
        token: "",
        userInfos: {
          username: "",
          email: "",
          userId: "",
          photo: "",
        },
      },

  mutations: {
    login(state, { token }) {
      state.token = token;
    },

    logout(state) {
      state.token = "";
    },
  },
  computed: {},

  actions: {},

  getters: {
    isLoggedIn: (state) => !!state.token,
  },

  modules: {},
});
store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
  console.log("mutState", mutation, state);
});
export default store;
