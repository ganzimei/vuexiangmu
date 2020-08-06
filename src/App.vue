<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <van-tabbar route v-model="active" style="width:100%">
        <van-tabbar-item to="/" icon="orders-o">新闻</van-tabbar-item>
        <van-tabbar-item to="/about" icon="tv-o">试听</van-tabbar-item>
        <van-tabbar-item to="/shequ" icon="coupon-o">社区</van-tabbar-item>
        <van-tabbar-item to="/wode" icon="manager-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0.2rem;
  border: 0.1rem white solid;
  border-top-color: gainsboro;
}
#nav > div {
  width: 25%;
  text-align: center;
}
#nav > div > a {
  color: grey;
  font-size: 1rem;
}
</style>
