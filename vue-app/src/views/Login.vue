<template>
  <form @submit.prevent="userLogin" class="vh-50 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-50 mb-5">
                  Please enter your login and password!
                </p>

                <div class="form-outline form-white mb-4">
                  <input
                    v-model="email"
                    type="email"
                    id="email"
                    class="color form-control form-control-lg"
                  />
                  <label class="form-label" for="email">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    v-model="password"
                    type="password"
                    id="password"
                    class="color form-control form-control-lg"
                  />
                  <label class="form-label" for="password">Password</label>
                </div>

                <button
                  class="btn btn-outline-secondary btn-lg px-5"
                  type="submit"
                >
                  Login
                </button>
              </div>

              <div>
                <p class="mb-0">
                  Don't have an account?
                  <router-link class="text-black-50 fw-bold" to="/SingUp"
                    >SingUp</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async userLogin() {
      console.log(this.email, this.password);

      const res = await fetch("http://localhost:8082/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            password: this.password,
            email: this.email,
          },
        }),
      });

      const data = await res.json();
      const token = data.token;
      this.$store.commit("login", { token });
      console.log("store", data.user);

      //this.$store.state.token
    },
  },
};
</script>

<style scoped>
.color {
  background: rgba(207, 212, 215, 0.521);
}
.card {
  background: white;
}
</style>
