<template>
  <div class="all">
    <div class="box">
      <h1>页面不存在.....</h1>
      <h1 style="color: skyblue;cursor: pointer" @click="back"> 点击返回上一页</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .all {
    width: 100vw;
    height: 100vh;
    background: url("../../assets/405.png") no-repeat;
    background-size:100% 100%;
    .box {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
