<template>
  <div v-if="model">
    <Navbar></Navbar>
    <div class="detailinfo">
      <div class="video">
        <video controls="controls" :src="model.content"></video>
      </div>
      <div class="detailinfoText">
        <div class="detailinfoText1">
          <span>{{model.category.title}}</span>
          <span>{{model.name}}</span>
        </div>
        <div class="detailinfoText2">
          <span>{{model.userinfo.name}}</span>
          <span>126.5万次观看</span>
          <span>5218弹幕</span>
          <span>{{model.date}}</span>
        </div>
        <div class="detailinfoText3">
          <span class="icon-star-full">收藏</span>
          <span class="icon-folder-download">缓存</span>
          <span class="icon-redo2">分享</span>
          <span class="icon-bubble">3959评论</span>
        </div>
      </div>
    </div>
    <div class="detailparent">
      <Detail
        class="detailitem"
        v-for="(item,index) in commendList"
        :key="index"
        :detailitem="item"
      ></Detail>
    </div>
    <CommentTitle></CommentTitle>
    <Comment></Comment>
  </div>
</template>
<script>
import Navbar from "@/components/common/Navbar.vue";
import Detail from "./Detail.vue";
import CommentTitle from "@/components/article/CommentTitle.vue";
import Comment from "@/components/article/Comment.vue";
export default {
  name: "Article",
  data() {
    return {
      model: null,
      commendList: null,
      myuser: null,
    };
  },
  components: {
    Navbar,
    Detail,
    CommentTitle,
    Comment,
  },
  methods: {
    async articleitemData() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      //console.log(res);
      this.model = res.data[0];
    },
    async commendData() {
      const res = await this.$http.get("/commend");
      this.commendList = res.data;
    },
  },
  created() {
    this.articleitemData();
    this.commendData();
  },
  watch: {
    $route() {
      this.articleitemData();
      this.commendData();
    },
  },
};
</script>
<style scoped>
.video {
  width: 100%;
}
video {
  width: 100%;
}
.detailinfoText {
  padding: 1.333vw 2.666vw;
}
.detailinfoText1 :nth-child(1) {
  padding: 0 2.666vw;
  color: #fb7299;
  background-color: #e4d9d9;
  border-radius: 2.666vw;
}
.detailinfoText2 {
  padding: 2.666vw 2.666vw;
  color: #aaa;
  font-size: 3.2vw;
}
.detailinfoText2 :nth-child(1) {
  color: black;
  font-size: 3.44vw;
  padding-right: 2.778vw;
}
.detailinfoText2 :nth-child(2) {
  padding-right: 2.778vw;
}
.detailinfoText2 :last-child {
  padding-left: 2.778vw;
}
.detailinfoText3 {
  color: #757575;
  display: flex;
  align-items: center;
}
.detailinfoText3 span {
  padding: 0 1.778vw;
  font-size: 2.88vw;
}
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.detailitem {
  margin: 1.389vw 0;
  width: 45%;
}
</style>