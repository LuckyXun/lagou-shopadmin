<!--
 * @Author: XunL
 * @Date: 2022-02-12 00:46:22
 * @LastEditTime: 2022-03-11 16:47:19
 * @Description: file content
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'

const slide = ref<ILoginInfo['slide']>([])

onMounted(async () => {
  const res = await getLoginInfo()
  slide.value = res.slide
  console.log(res)
})

</script>

<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">
        Go to Home
      </router-link>
      <router-link to="/about">
        Go to About
      </router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $red;
  margin-top: 60px;
}
</style>
