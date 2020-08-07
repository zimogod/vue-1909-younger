<template>
  <div class="comA">
    <div>A组件</div>
    <div>{{ num }}</div>
  </div>
</template>
<script>
export default {
  name: "comA",
  data(){
    return {
     num:100,
     timer:null
    }
  },
  mounted(){
    
  },
  activated() {
    console.log("激活生命周期函数");
    // this.$http.get('http://localhost:3001/allData').then(res=>{
    //   console.log(res.data) 
    // })
    // this.timer = setInterval(()=>{
    //   this.num++
    // },500)
  },
  deactivated() {
    console.log("非激活生命周期函数");
    // clearInterval(this.timer)
  },
};
</script>

