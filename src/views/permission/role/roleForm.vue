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
          ref="tree"
          node-key="id"
          :data="permisnsionTree"
          show-checkbox
          :props="{
            label: 'title'
          }"
        />
      </el-form-item>
    </el-form>
  </AppDialog>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import { IFormRule, IElForm } from '@/types/element-plus'
import { createAdmin, updateAdmin, getAdmin } from '@/api/admin'
import { ElMessage } from 'element-plus'
import { getPermissionTree } from '@/api/role'
import type { IPermission } from '@/api/types/role'

const props = defineProps({
  roleId: {
    type: Number as PropType<number | null>,
    default: null
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
  status: 0 as 0 | 1,
  checked_menus: ''
})
const permisnsionTree = ref<IPermission[]>([])
const handleDialogOpen = async () => {
  formLoading.value = true
  Promise.all([loadPermissionTree(), loadAdmin()]).finally(() => {
    formLoading.value = false
  })
}

const loadPermissionTree = async () => {
  const { menus } = await getPermissionTree()
  permisnsionTree.value = menus
}
const loadAdmin = async () => {
  if (props.roleId) {
    formData.value = await getAdmin(props.roleId)
  }
}

const emit = defineEmits(['success', 'update:admin-id'])
const handleDialogClosed = () => {
  emit('update:admin-id', null)
  form.value?.resetFields()
  form.value?.clearValidate()
}

const handleSumbit = async () => {
  props.adminId ? await updateAdmin(props.adminId, formData.value) : await createAdmin(formData.value)
  ElMessage.success(`${props.adminId ? '编辑' : '新增'}成功`)
  emit('success')
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
