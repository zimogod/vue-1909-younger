<template>
  <div class="home">
<!-- 匿名 -->
      <!-- <vslots>
        <h1>匿名：</h1>
          <div>三个商品</div>
      </vslots> -->
<!-- 具名 -->
     <!-- <vslots>
         <template v-slot:content>
             <div>我是具名插槽数据</div>
         </template>
         <template v-slot:content1>
             <div>我是具名插槽数据1111</div>
         </template>
         <div>对对对</div>
     </vslots> -->
<!-- 作用域插槽 -->
    <vslots :num="num" :list="list">
         <template v-slot="content">
             <div>{{ content.obj.name }}</div>
         </template>
     </vslots>
     <vslots>
         <div slot-scope="content">
             <span>{{ content.obj.age }}</span>
         </div>
     </vslots>
  </div>
</template>
<script>
import vslots from './vslots';
export default {
    name:'home',
    components:{
        vslots
    },
    data(){
        return {
            num:100,
            list:'list-100'
        }
    }
}
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
}
</style>
