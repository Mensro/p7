<template>
  <div class="home">
    <div v-if="isLoggedIn" class="container mt-4 mb-5">
      <div class="d-flex justify-content-center row">
        <div class="col-md-8">
          <div class="feed p-2">
            <div class="">
              <div class="feed-text">
                <h6 class="text-black-50 mt-2">What's on your mind ?</h6>
                <form @submit.prevent="createPost" class="text-black-50 mt-2">
                  <input
                    v-model="description"
                    type="description"
                    id="description"
                    class="color form-control form-control-lg smallformField"
                  />
                  <input
                    type="file"
                    id="file"
                    ref="myFiles"
                    class="custom-file-input"
                    @change="changeFile"
                    multiple
                  />
                </form>
              </div>
              <div class="feed-icon px-2">
                <i class="fa fa-long-arrow-up text-black-50"></i>
              </div>
            </div>
            <form @submit.prevent="postDelete">
              <div class="bg-white border mt-2 shadow">
                <div class="postsList">
                  <div class="postsItem" v-for="post in posts" :key="post.id">
                    <div class="bg-white border mt-2 shadow">
                      <div>
                        <div
                          class="
                            d-flex
                            flex-row
                            justify-content-between
                            align-items-center
                            p-2
                            border-bottom
                          "
                        >
                          <div
                            class="
                              d-flex
                              flex-row
                              align-items-center
                              feed-text
                              px-2
                            "
                          >
                            <img
                              class="rounded-circle mr-2"
                              src="data:image/jpeg;base64,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"
                              width="45"
                            />
                            <div
                              class="d-flex flex-column flex-wrap ml-2 pl-10"
                            >
                              <span class="ml-2 pl-10 font-weight-bold">{{
                                post.username
                              }}</span>
                            </div>
                            <button type="submit">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="feed-icon px-2">
                            <i class="fa fa-ellipsis-v text-black-50"></i>
                          </div>
                        </div>
                      </div>

                      <div class="feed-image p-2 px-3">
                        {{ post.description }}
                      </div>
                      <img :src="post.imageUrl" alt="" />

                      <div class="d-flex justify-content-end socials p-2 py-3">
                        <i class="fa fa-thumbs-up"></i
                        ><i class="fa fa-comments-o"></i
                        ><i class="fa fa-share"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="
                      d-flex
                      flex-row
                      justify-content-between
                      align-items-center
                      p-2
                      border-bottom
                    "
                  ></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  data() {
    return {
      description: "",
      image: null,

      posts: [],
    };
  },

  methods: {
    changeFile(event) {
      this.image = event.target.files[0];
      console.log("image change file", this.image);
    },
    async createPost() {
      console.log("image cratedpost", this.image);
      const body = new FormData();
      body.append("description", this.description);
      body.append("image", this.image);
      await fetch("http://localhost:8082/api/posts", {
        method: "POST",
        headers: {
          authorization: "Bearer " + this.$store.state.token,
        },

        body,
      });
      await this.getAllPost();

      console.log("userpost", this.description);
    },
    async getAllPost() {
      const response = await fetch("http://localhost:8082/api/posts", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: "Bearer " + this.$store.state.token,
        },
      });
      const data = await response.json();
      console.log("data", data);

      this.posts = data.reverse();
    },

    async postDelete() {
      const response = await fetch("http://localhost:8082/api/posts/id", {
        method: "DELETE",
        headers: {
          authorization: "Bearer " + this.$store.state.token,
        },
      });
      if (response.ok) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    this.getAllPost();
  },
};
</script>
<style scoped></style>
