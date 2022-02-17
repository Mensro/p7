<template>
  <div class="color" id="app">
    <div id="nav ">
      <nav
        class="
          navbar navbar-expand-lg navbar-light
          colornav
          rounded-bottom
          shadow
        "
      >
        <div class="container-fluid d-flex">
          <router-link class="navbar-brand text-white HomeLogSing" to="/home"
            ><img
              class="logo"
              src="..\src\assets\icon-left-font-monochrome-black.png"
              alt=""
          /></router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav align-items-center">
              <li class="nav-item">
                <router-link class="nav-link" to="/home">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">Login</router-link>
                <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/SingUp">SingUp</router-link>
              </li>
              <li class="nav-item">
                <div
                  class="
                    nav-link
                    d-flex
                    justify-content-center
                    align-items-center
                    feed-text
                    px-2
                  "
                >
                  <i class="dotOnline" src="..\src\assets\dot.svg"></i>
                  <div class="ml-1">
                    <router-link class="nav-link" to="/UserSetting"
                      >UserName</router-link
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function () {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
body {
  background: radial-gradient(#f6eded, #cfd4d7);
}
.dotOnline {
  width: 15px;
  height: 15px;
  margin-right: 5px;

  background: rgb(80, 216, 80);
  box-shadow: solid grey 15px, 15px;
  border-radius: 105%;
}
.navlink {
  margin: 10%;
}
.navbar-toggler {
  border: 1px solid white;
}

.colornav {
  background: rgb(255, 255, 255);
}

.logo {
  width: 10em;
}

#app {
  min-height: 920px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
