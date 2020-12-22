<template>
  <div class="navbar">
    <div class="logo">
      <!-- 点击logo返回主页 -->
      <img src="@/assets/logo.png" @click="topath" />
    </div>
    <div>
      <p>
        请输入搜索内容
        <van-icon class="ipt-icon" name="search" />
      </p>
    </div>
    <div>
      <img :src="imgUrl" @click="editpath" v-if="imgUrl" />
      <img src="@/assets/default_img.jpg" @click="$router.push('/login')" v-else />
      <p>下载APP</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      imgUrl: "",
    };
  },
  methods: {
    topath() {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
    editpath() {
      if (this.$route.path != "/userinfo") {
        this.$router.push("/userinfo");
      }
    },
  },

  async mounted() {
    if (localStorage.getItem("token")) {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.imgUrl = res.data[0].user_img;
    }
  },
};
</script>
<style  scoped>
.navbar {
  height: 12.5vw;
  background-color: white;
  display: flex;
}
.navbar .logo {
  width: 29.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar .logo img {
  width: 80%;
}
div:nth-child(2) {
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 1.389vw;
}
div:nth-child(2) p {
  height: 7.22vw;
  line-height: 7.22vw;
  padding-left: 6.944vw;
  font-size: 3.333vw;
  background-color: #f4f4f4;

  position: relative;
  width: 100%;
  border-radius: 3.611vw;
}
div:nth-child(2) p .ipt-icon {
  padding: 0;
  margin: 0;
  position: absolute;
  left: 2.778vw;
  top: 30%;

  color: #aaa;
}
div:nth-child(3) {
  display: flex;
  justify-content: center;
  align-items: center;
}
div:nth-child(3) img {
  width: 6.4vw;
  height: 6.4vw;
}
div:nth-child(3) p {
  padding: 1.33vw 2.66vw;
  margin: 0 1.33vw;
  background-color: #fb7299;
  color: white;
  border-radius: 0.8vw;
  font-size: 3.466vw;
}
</style>
