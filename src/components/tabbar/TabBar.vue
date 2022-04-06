<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  /* 本身的样式 */
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  /*box-shadow h-shadow水平阴影的位置,允许负值;v-shadow,垂直阴影的位置,允许负值;blur模糊距离;color,阴影的颜色*/
  box-shadow: 0px -1px 1px rgba(150,150,150,.08);

  /* 定位相关 */
  /* position: fixed; 元素的位置相对于浏览器窗口是固定位置。 即使窗口是滚动的它也不会移动：*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 利用flex进行布局 */
  display: flex;
  text-align: center;
}
</style>
