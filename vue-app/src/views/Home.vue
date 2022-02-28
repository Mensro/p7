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
                </form>
              </div>
              <div class="feed-icon px-2">
                <i class="fa fa-long-arrow-up text-black-50"></i>
              </div>
            </div>

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
                            class="rounded-circle"
                            src="https://pbs.twimg.com/media/FCJQu2QWYAMo5Vg.jpg"
                            width="45"
                          />
                          <div class="d-flex flex-column flex-wrap ml-2">
                            <span class="font-weight-bold">{{
                              post.username
                            }}</span
                            ><span class="text-black-50 time">{{
                              post.createdAt
                            }}</span>
                          </div>
                        </div>
                        <div class="feed-icon px-2">
                          <i class="fa fa-ellipsis-v text-black-50"></i>
                        </div>
                      </div>
                    </div>
                    <div class="feed-image p-2 px-3">
                      {{ post.description }}
                    </div>
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
      username: "",
      description: "",
      imageUrl: "",
      posts: [
        {
          description: String,
          imageUrl: String,
          createdAt: String,
        },
      ],
    };
  },
  methods: {
    async createPost() {
      await fetch("http://localhost:8082/api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: "Bearer " + this.$store.state.token,
        },

        body: JSON.stringify({
          imageUrl: this.imageUrl,
          description: this.description,
          username: this.username,
        }),
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
  },
  mounted() {
    this.getAllPost();
  },
};
</script>
<style scoped></style>
