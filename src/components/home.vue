<template>
  <div class="home">
    <!-- 匿名 -->
    <!-- <vslots>
        <h1>匿名：</h1>
          <div>三个商品</div>
    </vslots>-->
    <!-- 具名 -->
    <!-- <vslots>
         <template v-slot:content>
             <div>我是具名插槽数据</div>
         </template>
         <template v-slot:content1>
             <div>我是具名插槽数据1111</div>
         </template>
         <div>对对对</div>
    </vslots>-->
    <!-- 作用域插槽 -->
    <vslots :num="num" :list="list" obj1="姊妹">
      <template v-slot="content">
        <div>{{ content.obj.name }}</div>
      </template>
    </vslots>
    <!-- <vslots>
         <div slot-scope="content">
             <span>{{ content.obj.age }}</span>
         </div>
    </vslots>-->
    <div>
      {{ num }}
    </div>
    <router-link to="/vslots">去其他地方</router-link>
    <button @click="addNum">加</button>
  </div>
</template>
<script>
import vslots from "./vslots";
export default {
  name: "home",
  components: {
    vslots,
  },
  data() {
    return {
      num: 100,
      list: "list-100",
      obj1: {
        fff: "str123456",
      },
      timer:null
    };
  },
  methods:{
    addNum(){
      this.num++
    },
    times(){
      this.num++
    },
  },
  beforeMount() {
    console.log("挂载前");
    
  },
  mounted() {
    console.log("挂载中",this);
    // this.$http.get('http://localhost:3001/allData').then(res=>{
    //   console.log(res.data)
    // })
    this.timer = setInterval(this.times,500)
  },
  beforeCreate() {
    console.log("创建前");
  },
  created() {
    console.log("创建后");
    // this.$http.get('http://localhost:3001/allData').then(res=>{
    //   console.log(res.data)
    // })
  },
  beforeUpdate(){
    console.log("更新前");
  },
  updated(){
    console.log("更新后");
  },
  beforeDestroy(){
    console.log("销毁前");
  },
  destroyed(){
    console.log("销毁后");
    clearInterval(this.timer)
  }
};
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
}
</style>
