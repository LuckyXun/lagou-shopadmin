<!--
 * @Author: XunL
 * @Description: 添加、编辑角色弹窗
-->
<template>
  <AppDialog
    :title="props.roleId ? '编辑角色' : '添加角色'"
    @closed="handleDialogClosed"
    @open="handleDialogOpen"
    :confirm="handleSumbit"
    :form-loading="formLoading"
  >
    <el-form
      ref="form"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item
        label="身份名称"
        prop="role_name"
      >
        <el-input
          v-model="formData.role_name"
          placeholder="请输入管理员账号"
        />
      </el-form-item>
      <el-form-item label="是否启用">
        <el-radio-group v-model="formData.status">
          <el-radio
            :label="1"
          >
            开启
          </el-radio>
          <el-radio
            :label="0"
          >
            关闭
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="角色权限"
        prop="checked_menus"
      >
        <el-tree
          :value="formData.checked_menus"
          ref="tree"
          node-key="id"
          :data="permisnsionTree"
          show-checkbox
          @check="handlePermissionCheck"
          :props="{
            label: 'title'
          }"
        />
      </el-form-item>
    </el-form>
  </AppDialog>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { IFormRule, IElForm, IElTree } from '@/types/element-plus'

import { ElMessage } from 'element-plus'
import { getPermissionTree, createRole, getRole } from '@/api/role'
import type { IPermission } from '@/api/types/role'
const tree = ref<IElTree | null>(null)
const props = defineProps({
  roleId: {
    type: Number,
    default: 0
  }
})
const form = ref<IElForm | null>(null)
const formLoading = ref(false)

const formRules: IFormRule = {
  role_name: [
    { required: true, message: '请输入角色名称', trigger: 'blur' }
  ],
  status: [
    { required: true, message: '请设置身份状态', trigger: 'blur' }
  ],
  checked_menus: [
    { required: true, message: '请选择权限菜单', trigger: 'blur' }
  ]
}

const formData = ref({
  role_name: '',
  status: 1 as 0 | 1,
  checked_menus: ''
})
const permisnsionTree = ref<IPermission[]>([])
const handleDialogOpen = async () => {
  formLoading.value = true
  Promise.all([loadPermissionTree(), loadRole()]).finally(() => {
    formLoading.value = false
  })
}

const loadPermissionTree = async () => {
  const { menus } = await getPermissionTree()
  permisnsionTree.value = menus
}
const loadRole = async () => {
  if (props.roleId) {
    formData.value = await getRole(props.roleId)
    console.log(formData.value)
    await nextTick()
    setCheckedMenus(formData.value.checked_menus.split(',').map(n => +n))
  }
}
const setCheckedMenus = (menus: number[]) => {
  menus.forEach(menuId => {
    const node = tree.value?.getNode(menuId)
    console.log(menuId)
    if (node && node.isLeaf) { // 判断节点是否是叶子节点
      tree.value?.setChecked(menuId, true, false)
    }
  })
}

const emit = defineEmits(['success', 'update:role-id'])
const handleDialogClosed = () => {
  emit('update:role-id', 0)
  form.value?.resetFields()
  form.value?.clearValidate()
}
const handlePermissionCheck = (checked:number, data:{checkedKeys:[], halfCheckedKeys:[]}) => {
  formData.value.checked_menus = [...data.checkedKeys, ...data.halfCheckedKeys].toString()
}

const handleSumbit = async () => {
  form.value?.validate(async valid => {
    if (valid) {
      await createRole(props.roleId, formData.value)
      ElMessage.success(`${props.roleId ? '编辑' : '新增'}成功`)
      emit('success')
    }
  })
}

</script>

<style scoped lang="scss">
.el-select {
  width: 100%;
}
:deep(.el-form-item__content :only-child){
  width: 100%;
}

</style>
