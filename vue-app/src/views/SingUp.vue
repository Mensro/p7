<template>
  <form
    id="app"
    @submit.prevent="userSubmit"
    novalidate="true"
    class="vh-50 gradient-custom"
  >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">SignUp</h2>
                <p class="text-50 mb-5">
                  Please enter your login, pseudo and password!
                </p>

                <div class="form-outline form-white mb-4">
                  <input
                    v-model="email"
                    type="email"
                    id="email"
                    class="color form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    v-model="username"
                    type="text"
                    id="username"
                    class="color form-control form-control-lg"
                  />
                  <label class="form-label" for="username">pseudo</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    v-model="password"
                    type="password"
                    id="password"
                    class="color form-control form-control-lg"
                  />
                  <label class="form-label" for="typePasswordX">Password</label>
                </div>

                <button
                  class="btn btn-outline-secondary btn-lg px-5"
                  value="submit"
                  type="submit"
                >
                  Send.
                </button>
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
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async userSubmit() {
      console.log(this.username, this.email, this.password);

      await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: this.username,
            password: this.password,
            email: this.email,
          },
        }),
      });
    },
  },
};
</script>

<style scoped>
.color {
  background: rgba(207, 212, 215, 0.521);
}
</style>
