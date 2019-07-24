<template>
  <div class="category">
    <van-nav-bar title="商品分类"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="8" class="nav"></van-col>
        <van-col span="16" class="container"></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import url from '@/service.config.js'
  export default {
    created() {
      axios({
          url:url.getTypes
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
</script>

<style lang="scss">
</style>