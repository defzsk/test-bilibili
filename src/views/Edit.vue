<template>
  <div class="editView">
    <div style="margin-bottom:2.778vw">
      <NavBar></NavBar>
    </div>
    <div class="uploadfile">
      <!-- 头像上传  vant -->
      <van-uploader class="uploadimg" preview-size="100vw" :after-read="afterRead" />
      <editBanner left="头像">
        <img :src="model.user_img" slot="right" v-if="model.user_img" />
        <img src="@/assets/default_img.jpg" slot="right" v-else />
      </editBanner>
    </div>
    <editBanner left="昵称" @bannerClick="show = true">
      <a href="javascript:;" slot="right">{{model.name}}</a>
    </editBanner>
    <editBanner left="账号">
      <a href="javascript:;" slot="right">{{model.username}}</a>
    </editBanner>
    <editBanner left="性别" @bannerClick="gendershow = true">
      <a href="javascript:;" slot="right">{{model.gender==0 ? '男': '女'}}</a>
    </editBanner>
    <editBanner left="个性签名" @bannerClick="textshow=true">
      <a href="javascript:;" slot="right">{{model.user_desc}}</a>
    </editBanner>
    <div class="editback" @click="$router.back()">返回个人中心</div>
    <!-- 弹出框 -->
    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="content=''"
    >
      <!-- 插入一个输入框 -->
      <van-field v-model="content" autofocus />
    </van-dialog>
    <van-dialog
      v-model="textshow"
      title="个性签名"
      show-cancel-button
      @confirm="textareaClick"
      @cancel="content=''"
    >
      <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>
    <van-action-sheet v-model="gendershow" cancel-text="取消" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import NavBar from "@/components/common/Navbar.vue";
import editBanner from "@/components/common/editBanner.vue";
export default {
  name: "Edit",
  data() {
    return {
      model: {},
      show: false,
      textshow: false,
      gendershow: false,
      content: "",
      actions: [
        { name: "男", val: 0 },
        { name: "女", val: 1 },
      ],
    };
  },
  components: {
    NavBar,
    editBanner,
  },
  methods: {
    //进入组件调取数据渲染页面
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(file) {
      const formdata = new FormData();
      formdata.append("file", file.file);
      const res = await this.$http.post("/upload", formdata);
      //console.log(res);
      this.model.user_img = res.data.url;
      this.UserUpdate();
    },
    async UserUpdate() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      if (res.data.code == 200) {
        this.$msg.fail("修改成功");
      }
    },
    confirmClick() {
      this.model.name = this.content;
      this.UserUpdate();
      //把content在更新后设定为空
      this.content = "";
    },
    textareaClick() {
      this.model.user_desc = this.content;
      this.UserUpdate();
      //把content在更新后设定为空
      this.content = "";
    },
    onSelect(data) {
      this.model.gender = data.val;
      this.UserUpdate();
      this.gendershow = false;
    },
  },

  created() {
    this.selectUser();
  },
};
</script>
<style  scoped>
.editView a {
  color: #333;
}
.editView img {
  width: 12.788vw;
  height: 12.788vw;
  border-radius: 6.394vw;
}
.uploadfile {
  position: relative;
  overflow: hidden;
}
.uploadfile .uploadimg {
  /* opacity 变透明 */
  opacity: 0;
  position: absolute;
}
.editback {
  margin-top: 2.556vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  padding: 2.167vw;
  font-size: 5vw;
}
</style>
