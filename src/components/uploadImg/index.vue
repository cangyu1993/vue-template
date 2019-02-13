<template>
  <div class="img">
    <label>
      <i class="el-icon-upload2 changeBig"></i>
      <input type="file" style="display: none" @change="getImgUrl">
    </label>
  </div>
</template>

<script>
  import axios from 'axios'
  import {
    showFullScreenLoading,
    tryHideFullScreenLoading,
  } from '@/axios/axiosLoading'
  export default {
    name: "index",
    methods: {
      getImgUrl(event) {
        let file = event.target.files[0]
        let formData = new FormData()
        formData.append('img', file, file.name)
        showFullScreenLoading()
        axios.post('https://street.ewangke.com/v1/uploadimg', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            "token": this.$store.state.token
          }
        }).then(res => {
          tryHideFullScreenLoading()
          this.$emit('getimgs', res.data.data.info)//传给父元素
        }).catch(err=>{
          tryHideFullScreenLoading()
          this.$message.error('上传失败')
        })
      }
    },
  }
</script>

<style scoped lang="scss">
  .img {
    position: relative;
    width: 160px;
    height: 160px;
    box-sizing: border-box;
    margin: 10px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    overflow: hidden;
    .changeBig {
      font-size: 50px;
      font-weight: 100;
      display: block;
      padding: 90px;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .img:hover {
    border: 1px dashed #409EFF;
    color: #409EFF;
  }
</style>
