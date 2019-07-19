<template>
    <div class="profile">
        <van-tabs>
            <van-tab title="登录">
                <van-cell-group>
                    <van-field label='用户名' placeholder="请输入用户名" clearable required v-model='loginUsername' />
                    <van-field label='密码' type="password" placeholder="请输入密码" clearable required v-model="loginPassword "/>
                </van-cell-group>
                <div>
                  <van-button  type="primary" size="large">登录</van-button>
                </div>
            </van-tab>
            <van-tab title="注册">
                  <van-cell-group>
                    <van-field label='用户名' placeholder="请输入用户名" clearable required v-model="registUsername"/>
                    <van-field label='密码' type="password" placeholder="请输入密码" clearable required v-model="registPassword"/>
                </van-cell-group>
                <div>
                    <van-button @click="registHandler()" type="primary" size="large">注册</van-button>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js';
export default{
  data(){
    return{
      loginUsername:'',
      loginPassword:'',
      registUsername:'',
      registPassword:''
    }
  },
  methods:{
    registHandler(){
        axios({
            url:url.registUser, //发送请求的地址
            method:'post',
            data:{
              userName:this.registUsername, //名字和mongoose中的模型一一对应才能匹配上
              passWord:this.registPassword
            }
        })
        .then((res) => {
            if(res.data.code==200){
                this.$toast.success('注册成功');
            }else{
              this.$toast.fail('注册失败');
            }
        })
        .catch((err) => {
            this.$toast.fail('注册失败');
            console.log(err)
        });
    } 
  }
}
</script>

<style lang="scss">

</style>
