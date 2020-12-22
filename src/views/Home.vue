<template>
  <div class="home">
    <Navbar></Navbar>
    <van-tabs v-model="active" sticky swipeable>
      <van-tab
        v-for="(item, index) in category"
        :key="index"
        :title="item.title"
      >
        <van-list
          :immediate-check="false"
          v-model="item.loading"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="detailparent">
            <Detail
              class="detailitem"
              v-if="active == index"
              :detailitem="categoryitem"
              v-for="(categoryitem, categoryindex) in item.list"
              :key="categoryindex"
            ></Detail>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar.vue";
import Detail from "./Detail.vue";

export default {
  name: "Home",
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  components: {
    Navbar,
    Detail,
  },
  methods: {
    async selectCategory() {
      const res = await this.$http.get("/category");
      //console.log(res);
      this.changeCategory(res.data);
    },
    changeCategory(data) {
      const category1 = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.finished = false;
        item.loading = false;
        item.pagesize = 10;
        return item;
      });
      this.category = category1;
      this.selectArticle();
    },
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize,
        },
      });
      categoryitem.list.push(...res.data);
      categoryitem.loading = false;
      if (res.data.length < categoryitem.pagesize) {
        categoryitem.finished = true;
      }
    },
    onLoad() {
      const categoryitem = this.categoryItem();
      setTimeout(() => {
        categoryitem.page += 1;
        this.selectArticle();
      }, 1000);
    },

    categoryItem() {
      const categoryitem = this.category[this.active];
      return categoryitem;
    },
  },
  watch: {
    active() {
      this.selectArticle();
    },
  },
  created() {
    this.selectCategory();
  },
};
</script>
<style  scoped>
.home {
  background-color: white;
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
