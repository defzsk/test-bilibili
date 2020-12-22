<template>
  <div class="commentitems">
    <div class="commentItem">
      <div class="userImg">
        <img src="@/assets/default_img.jpg" />
      </div>
      <div class="commentContent">
        <p>
          <span>蜡笔小新</span>
          <span>04-27</span>
        </p>
        <div>123wefhcewcdkslcmkdlsnvj dsbv jdsn sndfncfnvj hdnsjkvbdjs</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommentItem",
  props: ["commentChild"],
};
</script>
<style scoped>
.commentitems {
  padding: 0 10px;
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