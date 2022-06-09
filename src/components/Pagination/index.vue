<!--
 * @Author: XunL
 * @Description: 公用分页组件
-->
<template>
  <el-pagination
    layout="total, sizes, prev, pager, next, jumper"
    background
    :page-sizes="[10, 20, 30, 40, 50, 100]"
    :page-size="props.limit"
    :current-page="props.page"
    :total="listCount"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>

<script lang="ts" setup>

const props = defineProps({
  limit: {
    type: Number,
    default: 10
  },
  page: {
    type: Number,
    default: 1
  },
  listCount: {
    type: Number,
    default: 1
  },
  loadList: {
    type: Function,
    required: true
  }
})
const emit = defineEmits(['update:page', 'update:limit'])

const handleCurrentChange = (page:number) => {
  emit('update:page', page)
  props.loadList()
}
const handleSizeChange = (size:number) => {
  emit('update:page', 1)
  emit('update:limit', size)
  props.loadList()
}

</script>

<style lang="scss" scoped>
.el-pagination {
  display: flex;
  justify-content: flex-end;
}
</style>
