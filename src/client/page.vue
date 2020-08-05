<template>
  <div class="page">
      <!-- v-html -->
      <!-- <div v-html="userInfo1"></div> -->
      <!-- -------------------------------------- -->
      <!-- v-text -->
      <!-- <div v-text="userInfo"></div> -->
      <!-- v-show -->
      <!-- -------------------------------------- -->
      <!-- <div v-show="!true">{{ userInfo }}---</div> -->
      <!-- v-else-if --> 
      <!-- <div v-if="!str">{{ str }}===</div> -->
      <!-- <div v-else-if="userInfo">{{ userInfo }}222</div>
      <div v-else>{{ info }}333</div> -->
      <!-- v-if -->
      <!-- <div v-if="info >= 21">{{ info }}</div>
      <div v-else>{{ userInfo }}</div> -->
     <!-- v-pre -->
     <!-- <div v-pre>
         <div>1234</div>
         <div>zimo</div>
         <div>{{ info }}</div>
     </div> -->
      <!-- 声明式的写法 -->
      <!-- <router-link to="/">home</router-link>
      <div>{{ message }}</div> -->
      <!-- v-model -->
      <!-- <input placeholder="请输入用户名" v-model="message" @change="onchanges">
      <ul>
          <li v-for="(item,index) in arr" v-bind:key="index">{{ item }}---{{ index }}</li>
      </ul> -->
      <!-- v-for -->
      <!-- <div v-for="(item,index) in obj" :key="index">
          {{ item.name }}:{{ item.age }}
      </div> -->
      <!-- v-on -->
     <!-- <div v-on:click="handleClick">事件</div> -->
     <!-- v-bind -->
     <!-- <img v-bind:src="img" >
     <img :src="img" > -->
     <div>我是父组件</div>
    <chacao>
        <div>你是默认的也没用，我是V8，显示me</div>
    </chacao>
  </div>
</template>
<script>
import chacao from './chacao';
export default {
    name:'page',
    // 注册一个组件，使其合法化
    components:{
        chacao
    },
    data(){
        return {
            userInfo1:`<div>千秋万代</div>`,
            isShow:'',
            str:'reset',
            userInfo:204,
            info:18,
            img:require('../assets/logo.png'),
            message:'',
            arr:['神仙','地狱','凡人','神仙','地狱','凡人','神仙','地狱','凡人','神仙','地狱','凡人'],
            obj:[
                {
                    name:'喵喵',
                    age:33
                },
                {
                    name:'呱呱',
                    age:33
                },
                {
                    name:'旺旺',
                    age:33
                },
                {
                    name:'吱吱',
                    age:33
                },
            ]
        }
    }, 
    methods:{
        onchanges(){
            console.log(this.message)
        },
        handleClick(){
            console.log('====')
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="less">
.page{
    width:100%;
    height: 100%;
}
</style>

