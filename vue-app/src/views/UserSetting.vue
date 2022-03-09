<template>
  <form class="container py-5 h-100">
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div class="card p-4">
        <div
          class="
            image
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <button class="btn btn-secondary">
            <img
              src="https://i.imgur.com/wvxPV9S.png"
              height="100"
              width="100"
            />
          </button>
          <span class="name mt-3">{{}}</span>

          <div
            class="
              d-flex
              flex-row
              justify-content-center
              align-items-center
              gap-2
            "
          >
            <span><i class="fa fa-copy"></i></span>
          </div>
          <div
            class="
              d-flex
              flex-row
              justify-content-center
              align-items-center
              mt-3
            "
          >
            <span class="number"
              >1069 <span class="follow">Followers</span></span
            >
          </div>
          <div class="d-flex mt-2">
            <button class="btn1 btn-dark">Edit image profile</button>
          </div>

          <div class="px-2 rounded mt-4 date">
            <span class="join">Joined May,2021</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button type="submit" class="btn btn-danger">delete this account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async userInfo() {
      const response = await fetch("http://localhost:8082/api/users/login", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: "Bearer " + this.$store.state.token,
        },
      });
      const data = await response.json();
      console.log("data", data);

      this.posts = data;
    },
  },
  mounted() {
    this.userInfo();
  },
};
</script>
