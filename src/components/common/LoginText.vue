<template>
  <div>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginText",
  props: ["label", "type", "placeholder", "rule"],
  data() {
    return {
      content: "",
    };
  },
  methods: {
    handlerulg() {
      // 上面的rule是个字符串，需要把它转换为正则
      const rue = new RegExp(this.rule); // 把rule字符串转化为正则
      // 正则校验
      if (rue.test(this.content)) {
        this.$emit("inputChange", this.content);
      }
    },
  },
  watch: {
    content() {
      this.handlerulg();
    },
  },
};
</script>
<style  scoped>
</style>
