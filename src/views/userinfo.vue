<template>
  <div class="userinfo">
    <NavBar></NavBar>
    <img src="@/assets/bannerTop_new.png" class="backimg" />
    <UserDetail :userInfo="model"></UserDetail>
  </div>
</template>

<script>
import NavBar from "../components/common/Navbar.vue";
import UserDetail from "@/components/userComponent/userDetail.vue";
export default {
  name: "Userinfo",
  data() {
    return {
      model: {},
    };
  },
  components: {
    NavBar,
    UserDetail,
  },
  methods: {
    async UserinfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
  },
  // 创建之后
  created() {
    this.UserinfoData();
  },
};
</script>
<style  scoped>
.userinfo .backimg {
  height: 91px;
  width: 100%;
}
</style>