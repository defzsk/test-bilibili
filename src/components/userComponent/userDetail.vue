<template>
  <div class="userdetail">
    <div class="one">
      <div class="user_img">
        <img :src="userInfo.user_img" v-if="userInfo.user_img" />
        <img src="@/assets/default_img.jpg" v-else />
      </div>
      <div class="user_edit">
        <div class="user_edit_top">
          <p>
            <span>0</span>
            <span class="user_text">粉丝</span>
          </p>
          <p>
            <span>54</span>
            <span class="user_text">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')">
          <div class="user_editBtn">编辑资料</div>
        </div>
      </div>
    </div>
    <div class="two">
      <h2>{{userInfo.name}}</h2>
      <p>这个人很神秘，什么都没留下</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  props: ["userInfo"],
};
</script>
<style  scoped>
.userdetail {
  background-color: white;
  padding: 3.2vw;
}
.one {
  display: flex;
}
.user_img img {
  margin-right: 5.333vw;
  width: 22.66vw;
  height: 22.66vw;
  border-radius: 50%;
}
.user_edit {
  flex: 1;
}
.user_edit .user_edit_top {
  display: flex;
}
.user_edit .user_edit_top p {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3.46vw;
}
.user_text {
  color: #aaa;
}
.user_editBtn {
  padding: 0.8vw 0;
  margin-top: 5.333vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fb7a9f;
  border: 1px solid #fb7a9f;
  border-radius: 0.8vw;
}

.two h2 {
  font-size: 5.3vw;
  margin: 1.33vw 0;
}
.two p {
  font-size: 3.73vw;
  color: #aaa;
}
</style>
