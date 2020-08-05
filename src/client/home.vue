// 写页面
<template>
<!-- template里面只能包含一个子元素 -->
  <div class="home">
      <!-- 我是home组件 -->
      <!-- {{ arr.join('、') }} -->
      <div class="msg">
          {{ msg }} {{ num }}
          <p>易烊千玺超级帅 无敌帅 </p>
          <p>秦霄贤也是</p>
          Dqx是一个聪明的姑娘
      </div>
      <!-- <ul class="list">
          <li> 11.28</li>
          <li>{{ 5*5 }}</li>
          <li>{{ 5+5 }}</li>
      </ul>
      <template>
          <div>你好啊</div>
          <div>大家好啊</div>
      </template> -->
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
            msg:'丁琪璇＆易烊千玺',
            arr:[2,3,4,5,6],
            num:'会长长久久'
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
    color: pink;
    .msg{
        width: 100%;
        height: 100vh;
        background: #857;
        text-align: center; 
        font-size: 25px;
    }
    .list{
        background: yellow;
    }
}
</style>

