<!--
 * @Author: XunL
 * @Description: 添加、编辑管理员弹窗
-->
<template>
  <AppDialog
    :title="props.adminId ? '编辑管理员' : '添加管理员'"
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
        label="管理员账号"
        prop="account"
      >
        <el-input
          v-model="formData.account"
          placeholder="请输入管理员账号"
        />
      </el-form-item>
      <el-form-item
        label="管理员密码"
        prop="pwd"
      >
        <el-input
          v-model="formData.pwd"
          type="password"
          placeholder="请输入管理员密码"
        />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="conf_pwd"
      >
        <el-input
          v-model="formData.conf_pwd"
          type="password"
          placeholder="请输入确认密码"
        />
      </el-form-item>
      <el-form-item
        label="管理员姓名"
        prop="real_name"
      >
        <el-input
          v-model="formData.real_name"
          placeholder="请输入管理员姓名"
        />
      </el-form-item>
      <el-form-item
        label="管理员身份"
        prop="roles"
      >
        <el-select
          v-model="formData.roles"
          multiple
          placeholder="请选择管理员身份"
        >
          <el-option
            v-for="item in roles"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
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
    </el-form>
  </AppDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IFormRule, IElForm } from '@/types/element-plus'
import type { ISelectOptions } from '@/api/types/form'
import { getRoles, createAdmin, updateAdmin, getAdmin } from '@/api/admin'
import { ElMessage } from 'element-plus'

const props = defineProps({
  adminId: {
    type: Number,
    default: null
  }
})
const form = ref<IElForm | null>(null)
const formLoading = ref(false)
const roles = ref<ISelectOptions []>([])
const formRules: IFormRule = {
  account: [
    { required: true, message: '请输入管理员账号', trigger: 'blur' }
  ],
  pwd: [
    { required: true, message: '请输入管理员密码', trigger: 'blur' }
  ],
  conf_pwd: [
    { required: true, message: '请输入确认密码', trigger: 'blur' }
  ],
  roles: [
    { required: true, message: '请选择管理员角色', trigger: 'blur' }
  ],
  real_name: [
    { required: true, message: '请输入管理员姓名', trigger: 'blur' }
  ]
}

const formData = ref({
  account: '',
  pwd: '',
  conf_pwd: '',
  roles: [] as number[],
  status: 0 as 0 | 1,
  real_name: ''
})

const handleDialogOpen = async () => {
  formLoading.value = true
  Promise.all([loadRoles(), loadAdmin()]).finally(() => {
    formLoading.value = false
  })
}

const loadRoles = async () => {
  const data = await getRoles()
  roles.value = data
}
const loadAdmin = async () => {
  if (props.adminId) {
    formData.value = await getAdmin(props.adminId)
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
</style>
