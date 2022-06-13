<!--
 * @Author: XunL
 * @Description: 公用弹窗组件
-->
<template>
  <el-dialog
    :model-value="props.modelValue"
    :title="props.title"
    :width="props.width"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose()">取消</el-button>
        <el-button
          type="primary"
          @click="handleConfirm"
        >确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">

const emit = defineEmits(['submit', 'update:modelValue'])
const handleClose = () => {
  emit('update:modelValue', false)
}

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '50%'
  },
  title: {
    type: String,
    required: true
  }
})

const handleConfirm = () => {
  emit('submit')
}
</script>

<style scoped lang="scss">

</style>
