/*
 * @Author: XunL
 * @Date: 2022-03-20 22:14:00
 * @LastEditTime: 2022-06-07 02:04:10
 * @Description: file content
 */
import { ElForm, ElDialog, ElTree } from 'element-plus'
import { FormItemRule } from 'element-plus/lib/components/form/src/types'

export type IElForm = InstanceType<typeof ElForm>
export type IElDialog = InstanceType<typeof ElDialog>
export type IElTree = InstanceType<typeof ElTree>

export type IFormRule = Record<string, FormItemRule[]>
