<template>
  <div class="page">
      <!-- 声明式的写法 -->
      <router-link to="/">home</router-link>
      <div>{{ message }}</div>
      <!-- v-model -->
      <input placeholder="请输入用户名" v-model="message" @change="onchanges">
      <ul>
          <li v-for="(item,index) in arr" v-bind:key="index">{{ item }}---{{ index }}</li>
      </ul>
      <!-- v-for -->
      <div v-for="(item,index) in obj" :key="index">
          {{ item.name }}:{{ item.age }}
      </div>
      <!-- v-on -->
     <div v-on:click="handleClick">事件</div>
     <!-- v-bind -->
     <img v-bind:src="img" >
     <img :src="img" >
  </div>
</template>
<script>
export default {
    name:'page',
    data(){
        return {
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

