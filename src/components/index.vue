<template>
  <div class="index">
    index组件:
    <!-- 声明式跳转 -->
    <router-link to="/aaa">去aaa</router-link>
    <keep-alive :include="/comA|comC/">
      <component :is="isShow"></component>
    </keep-alive>
    <button @click="changeComponent('A')">comA</button>
    <button @click="changeComponent('B')">comB</button>
    <button @click="changeComponent('C')">comC</button>
  </div>
</template>
<script>
import comA from './common/aaa'
import comB from './common/bbb'
import comC from './common/ccc'
export default {
  name: "index",
  components: {
      comA,
      comB,
      comC
  },
  data() {
    return {
      isShow:comA
    };
  },
  methods:{
    changeComponent(data){
      this.isShow = 'com'+data;
    }
  },
  
};
</script>
<style lang="less">
.index {
  width: 100%;
  height: 100%;
}
</style>
