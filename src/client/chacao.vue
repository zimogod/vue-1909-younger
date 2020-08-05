<template>
  <div class="slots">
    我是子组件
    <!-- 匿名插槽 -->
    <slot>我是默认数据</slot>
  </div>
</template>
<script>
export default {
    name:'slots',
    data(){
        return {
           
        }
    }, 
}
</script>
<style lang="less">
.slots{
    width:100%;
    height: 100%;
}
</style>

