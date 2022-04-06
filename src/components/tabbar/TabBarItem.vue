<template>
  <div id="tab-bar-item" @click="itemClick">
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/Home.svg">-->
<!--&lt;!&ndash;      图片与字默认是水平分布的，但是用div包括字，图片与div是垂直分布的&ndash;&gt;-->
<!--      <div>首页</div>-->
<!--    </div>-->
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      // isActive: true
    }
  },
  computed: {
    isActive(){ //$route 目前活跃的路由
      // 判断当前活跃的路径包不包含这里传过去的path
      // /home -> item1(/home) = true
      // /home -> item1(/category) = true
      // /home -> item1(/shopcart) = true
      // /home -> item1(/profile) = true
      // .indexOf == -1 表示没有找到
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      // 判断是否处于活跃状态：是则给style动态绑定一个color为this.activeColor；否则返回默认空对象
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
}
/*.tab-bar-item {*/
/*  flex: 1;*/
/*  text-align: center;*/
/*  height: 49px;*/
/*  !*开发tabbar一般高度为49px*!*/
/*  font-size: 14px;*/
/*}*/
/*.tab-bar-item img{*/
/*  width: 24px;*/
/*  height: 24px;*/
/*  margin-top: 3px;*/
/*  !*vertical-align: middle;(可以去除图片和文字中间的一段空白)将支持valign特性的对象的内容与对象中部对齐; 支持vertical特性的对象是内联块，意思就是两个内联块中部对齐。 *!*/
/*  vertical-align: middle;*/
/*  margin-bottom: 2px;*/
/*}*/
.item-icon img, .item-active-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

.item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}
</style>
