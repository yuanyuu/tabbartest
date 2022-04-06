<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="icon" src="../../assets/img/tabbar/home.svg">
      <img slot="active-icon" src="../../assets/img/tabbar/home_active.svg">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="green">
      <img slot="icon" src="../../assets/img/tabbar/category.svg">
      <img slot="active-icon" src="../../assets/img/tabbar/category_active.svg">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="orange">
      <img slot="icon" src="../../assets/img/tabbar/shopcart.svg">
      <img slot="active-icon" src="../../assets/img/tabbar/shopcart_active.svg">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="purple">
      <img slot="icon" src="../../assets/img/tabbar/profile.svg">
      <img slot="active-icon" src="../../assets/img/tabbar/profile_active.svg">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../tabbar/TabBar'
import TabBarItem from "../tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
