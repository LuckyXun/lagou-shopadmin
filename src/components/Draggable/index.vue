<template>
  <ul ref="draggableContainer">
    <slot />
  </ul>
</template>
<script setup lang='ts'>
import Sortable from 'sortablejs'
import { onMounted, PropType, ref } from 'vue'

const draggableContainer = ref<HTMLDivElement|null>(null)
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  options: {
    type: Object as PropType<Sortable.Options>,
    default: () => {}
  }
})
const sortable = ref<Sortable | null>(null)
onMounted(() => {
  if (draggableContainer.value) {
    console.log(draggableContainer.value)
    sortable.value = Sortable.create(draggableContainer.value, {
      animation: 300,
      ...props.options
    })
  }
})
</script>

<style>

</style>
