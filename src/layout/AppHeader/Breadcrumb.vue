<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="route in routes"
      :key="route.path"
    >
      {{ route.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const routes = computed(() => useRoute().matched.filter(n => n.meta.title))

</script>

<style lang="scss" scoped></style>
