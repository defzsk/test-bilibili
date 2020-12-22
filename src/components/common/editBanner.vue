<template>
  <div @click="bannerClick">
    <div class="editbanner">
      <span>{{left}}</span>
      <span>
        <slot name="right"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "editBanner",
  props: ["left"],
  methods: {
    bannerClick() {
      this.$emit("bannerClick");
    },
  },
};
</script>
<style  scoped>
.editbanner {
  background-color: white;
  color: #333;
  padding: 4.167vw;
  border-bottom: 0.278vw solid #fafafa;
  font-size: 3.889vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>