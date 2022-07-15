<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      :editor="editorRef"
      style="border-bottom: 1px solid #ccc"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      :value="props.modelValue"
      :default-config="editorConfig"
      :mode="mode"
      @on-created="handleCreated"
      @on-change="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, shallowRef } from '@vue/runtime-core'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IDomEditor } from '@wangeditor/editor'
const mode = 'default'
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const editorRef = shallowRef<IDomEditor>()

interface EmitsType {
  (e: 'update:model-value', value: string): void
}

const emit = defineEmits<EmitsType>()

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
const handleChange = function (editor:IDomEditor) {
  emit('update:model-value', editor.getHtml())
}
const handleCreated = (editor) => {
  editorRef.value = editor
}
</script>

<style lang="scss" scoped>
// 引入 css
</style>
