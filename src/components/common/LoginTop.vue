<template>
  <div>
    <div class="LoginTop">
      <div></div>
      <div>{{ middleTop }}</div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginTop",
  props: ["middleTop"],
};
</script>
<style  scoped>
.LoginTop {
  /*vw单位表示法，(宽高大小 px)/ （设计稿宽度）* 100 =  vw ;这样设置后宽高可以自适应屏幕，随着变化*/
  font-size: 4.266vw;
  height: 12.5vw;
  background-color: white;
  display: flex;
}
.LoginTop div {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  /*vw单位表示法，(字体大小 pm)/ （设计稿宽度）* 100 =  vw ;这样设置后字体可以自适应屏幕，随着变化*/
  font-size: 4.266vw;
}
</style>