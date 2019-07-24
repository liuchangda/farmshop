<template>
  <div class="category">
    <van-nav-bar title="商品分类"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li @click="selectCategory(item.typeId,index)" :class="{active:active==index}" v-for="(item,index) in types" :key="index" >{{item.typeName}}</li>
          </ul> 
        </van-col>
        <van-col span="18" class="container">
          <van-list class="content" >
            <div class="content-item" v-for="(item ,index) in productList" :key="index">
              <img :src="item.img" alt="">
              <p class="content-item-name" >{{item.name}}</p>
              <p>￥{{item.price}}</p>
            </div>
          </van-list>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import url from '@/service.config.js'
  export default {
    data(){
      return{
        types:[],
        productList:[],
        active:0,
        typeId:1,//当前选中类型的id
        start:0,
        limit:10
      }
    },
    methods:{
      selectCategory(typeId,index){
        this.active = index;
        this.typeId = typeId;
        this.getProductList();
      },
      getProductList(){
        axios({
          url:url.getProductByType,
          method:'get',
          params:{
            typeId:this.typeId,
            start:this.start,
            limit:this.limit
          }
        }).then((res)=>{
          this.productList = res.data;
        }).catch(()=>{

        })
      }
    },

    created() {
      axios({
          url:url.getTypes,
        })
        .then(res => {
          this.types = res.data;
          this.selectCategory(this.typeId,this.index)
          console.log(this.types);
        })
        .catch(err => {
          console.log(err);
        });
    },
  };
</script>

<style lang="scss">
.nav{
  background: #eee;
  li{
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    text-align: center;
    padding: 3px;
  }
  .active{
    background: #ffffff;
  }
}
.container{
  position: fixed;
  top:1rem;
  right: 0;
  bottom:1rem;
  overflow-y:scroll;
}
.content{
  display:flex;
  flex-wrap:wrap;
  padding-bottom:1rem;
  &-item{
    width:40%;
    padding: 0 10px;
    text-align: center; 
    img{
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>