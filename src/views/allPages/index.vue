<template>
  <!--嵌套路由页面-->
  <div class="all">
   <div v-if="this.$store.state.isShow">
     <div class="headers">
       <headers/>
     </div>
     <div class="content">
       <div class="navleft ">
         <navLeft/>
       </div>
       <div class="mainContent">
         <router-view  />
       </div>
     </div>
   </div>
    <div v-if="!this.$store.state.isShow">
      <router-view  />
    </div>
  </div>
</template>

<script>
  import headers from '@/components/headers'
  import navLeft from '@/components/nav'

  export default {
    name: "index",
    components: {
      headers,
      navLeft
    },
    methods:{},
  }
</script>

<style scoped lang="scss">
  .all {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .headers {
      width: 100%;
      min-height: 80px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 98;
    }
    .content {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      .navleft {
        min-height: 600px;
        position: fixed;
        top: 80px;
        left: 0;
        bottom: 0;
        background: #2B3242;
        z-index: 98;
        overflow-y: scroll;
      }
      .mainContent {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        min-height: 88.8vh;
        margin-left: 200px;
        background: #D0D0D0;
      }
    }
  }
  .clearfix:after {
    display: block;
    clear: both;
    content: '';
    height: 0;
    visibility: hidden;
  }
  .hidden{
    display: none;
  }
</style>
