<template>
  <div id="app">
    <!-- 显示容器组件:显示内容 -->
    <!-- <keep-alive> -->
       <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  #app {
    width: 100%;
    height: 100%;
  }
}
</style>
