<!--
 * @Author: XunL
 * @Description: 菜单组件
-->
<template>
  <el-sub-menu
    v-if="menu.children"
    :index="menu.path"
  >
    <template #title>
      <app-icon
        v-if="menu.icon"
        :name="getIcon(menu.icon)"
        color="rgba(255, 255, 255, 0.7)"
      />
      <span>{{ menu.title }}</span>
    </template>
    <el-menu-item-group>
      <menu-item
        v-for="item in menu.children"
        :key="item.path"
        :menu="item"
      />
    </el-menu-item-group>
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="menu.path"
  >
    <app-icon
      v-if="menu.icon"
      :name="getIcon(menu.icon)"
      color="rgba(255, 255, 255, 0.7)"
    />
    <template #title>
      {{ menu.title }}
    </template>
  </el-menu-item>
</template>

<script lang='ts' setup>
import { IMenu } from '@/api/types/common'
import type { PropType } from '@vue/runtime-core'
import { ref } from '@vue/runtime-core'

const props = defineProps({
  menu: {
    type: Object as PropType<IMenu>,
    required: true
  }
})

const menu = ref(props.menu)

function getIcon (name:string) {
  if (name.indexOf('md-') > -1) {
    return name.split('-')[1]
  }
  return name
}

</script>

<style lang='stylus' scoped></style>
