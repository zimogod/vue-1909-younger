// 写页面
<template>
<!-- template里面只能包含一个子元素 -->
  <div class="home">
      我是home组件
      <div class="msg">{{ msg }}:{{ arr.join('、') }}</div>
      <ul class="list">
          <li>{{ num }}</li>
          <li>{{ 5*5 }}</li>
          <li>{{ 5+5 }}</li>
      </ul>
      <template>
          <div>你好啊</div>
          <div>大家好啊</div>
      </template>
  </div>
</template>
// 写JS
<script>
export default {
    // 当前组件的名字
    name:'home',
    // data函数里面是命名变量的
    data(){
        return {
            flag:true,
            msg:'树',
            arr:[2,3,4,5,6],
            num:90
        }
    },
    methods:{

        getData(){
            alert('哈哈哈！');
        }
    },
    beforeMount(){
        console.log(document.getElementsByClassName('list')[0],'000')
    },
    mounted(){
        console.log(document.getElementsByClassName('list')[0],'111')
    }
}
</script>
// 写css
<style lang="less">
.home{
    width:100%;
    height: 100%;
    background: #ccc;
    .msg{
        width: 100%;
        height: 100px;
        background: hotpink;
    }
    .list{
        background: yellow;
    }
}
</style>

