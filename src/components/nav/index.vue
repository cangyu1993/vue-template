<template>
  <!--导航栏页-->
  <div class="all">
    <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
      <!--<el-radio-button :label="false">展开</el-radio-button>-->
      <!--<el-radio-button :label="true">收起</el-radio-button>-->
    <!--</el-radio-group>-->
    <el-menu
      class="content-wrap"
      background-color="#2B3242"
      text-color="#9f9f9f"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#fff"
      :default-active="$route.path"
    >
      <!--<el-menu-item index="/allPages/control">-->
        <!--<i class="el-icon-location"></i>-->
        <!--<span slot="title">控制台</span>-->
      <!--</el-menu-item>-->

      <el-menu-item index="/allPages/users">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/allPages/admins" v-if="this.$store.state.userData.admin_rule==1">
        <i class="el-icon-news"></i>
        <span slot="title">管理员管理</span>
      </el-menu-item>
      <el-menu-item index="/allPages/visitingRecords">
        <i class="el-icon-location-outline"></i>
        <span slot="title">工作留痕</span>
      </el-menu-item>
      <el-menu-item index="/allPages/dailyWork">
        <i class="el-icon-date"></i>
        <span slot="title">工作日志</span>
      </el-menu-item>
      <el-menu-item index="/allPages/specialSituation">
        <i class="el-icon-rank"></i>
        <span slot="title">情况上报</span>
      </el-menu-item>
      <!--<el-menu-item index="/allPages/signIn">-->
        <!--<i class="el-icon-edit-outline"></i>-->
        <!--<span slot="title">签到</span>-->
      <!--</el-menu-item>-->
      <el-menu-item index="/allPages/noticeList">
        <i class="el-icon-tickets"></i>
        <span slot="title">公告</span>
      </el-menu-item>

      <el-menu-item index="/allPages/settingUp">
        <i class="el-icon-setting"></i>
        <span slot="title">操作记录</span>
      </el-menu-item>

      <el-submenu index="2" class="menu_2">
        <template slot="title">
          <i class="el-icon-delete"></i>
          <span>回收站</span>
        </template>
        <el-menu-item index="/allPages/visitingRecycle" class="second_nav">入户探访记录回收站</el-menu-item>
        <el-menu-item index="/allPages/dailyRecycle" class="second_nav">每日工作内容回收站</el-menu-item>
        <el-menu-item index="/allPages/specialRecycle" class="second_nav">特殊情况回收站</el-menu-item>
        <el-menu-item index="/allPages/noticeRecycle" class="second_nav">公告回收站</el-menu-item>
      </el-submenu>



    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        isCollapse:true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="scss">
  .all {
    width: 200px;
    box-sizing: border-box;
    .el-menu {
      border-right-width: 0;
      /deep/ .menu_2{
        font-size: 12px !important;
        .second_nav{
          font-size: 12px;
        }
      }
    }
  }

</style>
