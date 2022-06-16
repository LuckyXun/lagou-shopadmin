<!--
 * @Author: XunL
 * @Description: 公用弹窗组件
-->
<template>
  <el-dialog
    :model-value="props.modelValue"
    :width="props.width"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    custom-class="ccc"
  >
    <slot class="t4est" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose()">取消</el-button>
        <el-button
          :loading="confirmLoading||formLoading"
          type="primary"
          @click="handleConfirm"
        >确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'

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
  formLoading: {
    type: Boolean,
    default: false
  },
  confirm: {
    type: Function as PropType<()=>Promise<void>>,
    default: () => Promise.resolve()
  }
})
const confirmLoading = ref(false)
const handleConfirm = async () => {
  confirmLoading.value = true
  // emit('confirm')
  await props.confirm().finally(() => {
    confirmLoading.value = false
  })
}
</script>

<style scoped  lang="scss">

</style>
