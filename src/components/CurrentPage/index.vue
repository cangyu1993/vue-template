<template>
  <div class="all">
    <el-pagination
      :current-page.sync="currentPage"
      layout="total, prev, pager, next"
      :page-count="countPage"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "index",
    props:{
      total:{
        type:Number,
        default:1000
      },
      size:{
        type:Number,
        default:5
      },
      countPage:{
        type:Number,
        default:1
      },
    },
    data(){
      return{
        currentPage:1,
    // :page-size="size"
      }
    },
    methods: {},
    watch:{
      currentPage(val){
        this.$emit('valPage',val)
      }
    }
  }
</script>

<style scoped>

</style>
