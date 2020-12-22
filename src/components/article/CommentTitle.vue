<template>
  <div class="comment">
    <p class="comment-title">
      <span>评论</span>
      <span>(4070)</span>
    </p>
    <div class="commentmyinfo">
      <img :src="myuser.user_img" v-if="myuser" />
      <img src="@/assets/default_img.jpg" v-else />
      <input type="text" placeholder="说点什么呢?" />
      <button @click="commentPublish">发布</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommentTitle",
  data() {
    return {
      myuser: null,
    };
  },
  methods: {
    async myuserinfo() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.myuser = res.data[0];
    },
    commentPublish() {
      if (
        !this.myuser &&
        !localStorage.getItem("token") &&
        !localStorage.getItem("id")
      ) {
        this.$msg.fail("请先登录");
        return;
      }
    },
  },
  created() {
    if (localStorage.getItem("token")) {
      this.myuserinfo();
    }
  },
};
</script>
<style scoped>
.comment {
  padding: 8.333vw 2.778vw 0 2.778vw;
}
.comment-title :nth-child(2) {
  color: #aaa;
  margin-left: 2.778v w;
}
.commentmyinfo {
  display: flex;
}
.commentmyinfo img {
  width: 7.944vw;
  height: 7.944vw;
  border-radius: 50%;
}
.commentmyinfo input {
  outline: none;
  border: none;
  background-color: #c0c0c0;
  border-radius: 3.611vw;
  font-size: 15px;
  padding: 0 15px;
  margin-left: 10px;
}
.commentmyinfo button {
  outline: none;
  border: 0;
  border-radius: 3.33vw;
  background: #fb7299;
  color: white;
  font-size: 3.33vw;
  padding: 0 4.167vw;
}
</style>