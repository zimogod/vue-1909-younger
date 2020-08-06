<template>
  <div class="vslots">
      <!-- <slot>
        购物车为空
      </slot> -->
<!-- 具名插槽 -->
      <!-- <slot name="content">
        具名数据
      </slot>
      <slot name="content1">
        具名数据1
      </slot>
      <slot></slot> -->
<!-- 作用域插槽 -->
    <slot :obj="obj"></slot>
    <div>{{ num }}--{{ list }}</div>
  </div>
</template>
<script>
export default {
    name:'vslots',
    props:['num','list'],
    data(){
        return {
          obj:{
            name:'zimo',
            age:'20'
          }
        }
    }
}
</script>
<style lang="less">
.vslots {
  width: 100%;
  height: 60px;
  background: yellow;
}
</style>
