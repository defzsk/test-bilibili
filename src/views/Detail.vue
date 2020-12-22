<template>
  <div @click="pathpush" v-if="detailitem">
    <div class="detailItem">
      <div class="imgparent">
        <img :src="detailitem.img" style="width:100%" />
        <div class="bottom">
          <div class="icon-play2">
            <span class="video">66</span>
          </div>
          <div class="icon-newspaper">
            <span class="comment">{{!detailitem.commentlen ? 666 : detailitem.commentlen}}</span>
          </div>
        </div>
      </div>
      <p>{{detailitem.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  props: ["detailitem"],
  methods: {
    pathpush() {
      if (this.$route.path != `/article/${this.detailitem.id}`) {
        this.$router.push(`/article/${this.detailitem.id}`);
      }
    },
  },
};
</script>
<style scoped>
p {
  font-size: 3.33vw;
}
.imgparent {
  position: relative;
}
/* .video {
  position: absolute;
  left: 1.389vw;
  bottom: 0;
} */
/* .comment {
  position: absolute;
  right: 1.389vw;
  bottom: 0;
} */
.imgparent {
  position: relative;
}
.bottom {
  padding: 0 1.333vw;
  position: absolute;
  bottom: 1.333vw;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), transparent);
  color: white;
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
}
</style>