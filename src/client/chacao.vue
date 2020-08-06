<template>
  <div class="slots">
    我是子组件
    <br/>
<!-- 匿名插槽 -->
    <!-- <slot>我是默认数据</slot> -->
<!-- 具名插槽 -->
    <!-- <slot >默认数据111</slot>
    <slot></slot>
    <slot name="footer">默认数据222</slot> -->
<!-- 作用域插槽 -->
    <slot :arr="arr"></slot>
  </div>
</template>
<script>
export default {
    name:'slots',
    data(){
        return {
           arr:[3,4,5,6,7]
        }
    }, 
}
</script>
<style lang="less">
.slots{
    width:100%;
    height: 100px;
    color: #000;
}
</style>

