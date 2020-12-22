<template>
  <div class="commentParent">
    <div class="box" v-for="(item,index) in commentList" :key="index">
      <div class="commentItem">
        <div class="userImg">
          <img v-if="item.userinfo" :src="item.userinfo.user_img" />
          <img v-else src="@/assets/default_img.jpg" />
        </div>
        <div class="commentContent">
          <p>
            <span v-if="item.userinfo">{{item.userinfo.name}}</span>
            <span v-else>该用户无姓名</span>
            <span>{{item.comment_date}}</span>
          </p>
          <div>{{item.comment_content}}</div>
        </div>
      </div>
      <CommentItem :commentChild="item.child"></CommentItem>
    </div>
  </div>
</template>
<script>
import CommentItem from "./CommentItem.vue";
export default {
  name: "Comment",
  data() {
    return {
      commentList: null,
    };
  },
  components: {
    CommentItem,
  },
  methods: {
    async commendData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      this.commentList = this.changeCommentData(res.data);
    },
    async commentData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      if (res.data) {
        this.$emit("lengthselect", res.data.length);
      }
      this.commentList = this.changeCommentData(res.data);
    },
    changeCommentData(data) {
      function fn(temp) {
        let arr1 = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id == temp) {
            arr1.push(data[i]);
            data[i].child = fn(data[i].comment_id);
          }
        }
        return arr1;
      }
      return fn(null);
    },
  },
  created() {
    this.commendData();
  },
};
</script>
<style scoped>
.commentParent {
  padding: 20px 10px;
}
.box {
  border-bottom: 1px solid #dee6e4;
}
.commentItem {
  display: flex;

  padding: 10px 0;
}
.userImg img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}
.commentContent {
  flex: 1;
}
.commentContent p {
  display: flex;
  justify-content: space-between;
  color: #555;
  font-size: 13px;
  margin-bottom: 5px;
}
.commentContent div {
  font-size: 13px;
}
</style>