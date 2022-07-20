<template>
  <div ref="draggableContainer">
    <slot />
  </div>
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
  setTimeout(() => {
    if (!draggableContainer.value) {
      console.error('容器不能为空')
      return
    }
    sortable.value = Sortable.create(draggableContainer.value, {
      animation: 300,
      ...props.options,
      onUpdate (evt) {
        if (evt.oldIndex !== undefined && evt.newIndex !== undefined) {
          const item = props.modelValue.splice(evt.oldIndex, 1)[0]
          props.modelValue.splice(evt.newIndex, 0, item)
        }
      }
    })
  })
})
</script>

<style>

</style>
