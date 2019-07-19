<template>
    <div class="profile">
        <van-tabs>
            <van-tab title="登录">
                <van-cell-group>
                    <van-field label='用户名' placeholder="请输入用户名" clearable required v-model='loginUsername' />
                    <van-field label='密码' type="password" placeholder="请输入密码" clearable required v-model="loginPassword "/>
                    <van-button  type="primary" size="large">登录</van-button>
                </van-cell-group>
            </van-tab>
            <van-tab title="注册">
                  <van-cell-group>
                    <van-field label='用户名' placeholder="请输入用户名" clearable required v-model="registUsername"/>
                    <van-field label='密码' type="password" placeholder="请输入密码" clearable required v-model="registPassword"/>
                    <van-button @click="registHandler" type="primary" size="large">注册</van-button>
                </van-cell-group>
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
            url:url.registUser,
            method:'post',
            data:{
              userName:this.registUsername,
              passWord:this.registPassword
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });
    } 
  }
}
</script>

<style lang="scss">

</style>
