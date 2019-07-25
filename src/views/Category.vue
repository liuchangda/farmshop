<template>
  <div class="category">
    <van-nav-bar title="商品分类"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li :class="{active:active==index}" @click="selectCategory(item.typeId,index)" v-for="(item,index) in types"
              :key="index">{{item.typeName}}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="isLoading" class="content" @load="onLoad" :finished="finished" finished-text="没有更多了">
              <div class="content-item" v-for="(item , index) in productList" :key="index">
                <img :src="item.img" alt="">
                <p class="content-item-name">{{item.name}}</p>
                <p>￥{{item.price}}</p>
              </div>
            </van-list>
          </van-pull-refresh>

        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import url from '@/service.config.js'
  import {
    setTimeout
  } from 'timers';
  export default {
    data() {
      return {
        types: [],
        productList: [],
        active: 0,
        typeId: 1, //当前选中类型的id
        start: 0,
        limit: 10,
        finished: false,
        isLoading:false
      }
    },
    methods: {
      selectCategory(typeId, index) {
        this.active = index;
        this.typeId = typeId;
        this.getProductList();
        this.productList = [];
        this.finished = false;
      },
      getProductList() {
          this.isLoading = true;
        axios({
          url: url.getProductByType,
          method: 'get',
          params: {
            typeId: this.typeId,
            start: this.productList.length,
            limit: this.limit
          }
        }).then((res) => {
          this.isLoading = false;
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }
        }).catch(() => {

        })
      },
      onLoad() {
        setTimeout(() => {
          this.getProductList();
        }, 2000)
      },
      onRefresh(){
        setTimeout(() => {
          this.productList = [];
          this.getProductList();
        }, 2000);
      }
    },

    created() {
      axios({
          url: url.getTypes,
        })
        .then(res => {
          this.types = res.data;
          this.selectCategory(this.typeId, this.active);
          console.log(this.types);
        })
        .catch(err => {
          console.log(err);
        });
    },
  };
</script>

<style lang="scss">
  .nav {
    background: #eee;

    li {
      height: 0.6rem;
      line-height: 0.6rem;
      border-bottom: 1px solid #fff;
      text-align: center;
      padding: 3px;
    }

    .active {
      background: #ffffff;
    }
  }

  .container {
    background: #ffffff;
    position: fixed;
    top: 46px;
    right: 0;
    bottom: 1rem;
    overflow-y: scroll;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1rem;

    &-item {
      width: 40%;
      padding: 0 10px;
      text-align: center;

      img {
        width: 2rem;
        height: 2rem;
      }

      &-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>