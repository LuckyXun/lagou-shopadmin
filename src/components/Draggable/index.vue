<template>
  <ul id="items">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
</template>
<script setup lang='ts'>
import Sortable from 'sortablejs'
import { onMounted } from 'vue'

onMounted(() => {
  const el = document.getElementById('items')
  if (el) {
    Sortable.create(el)
  }
})
</script>

<style>

</style>
