/*
 * @Author: XunL
 * @Date: 2022-03-20 22:14:00
 * @LastEditTime: 2022-05-12 01:47:43
 * @Description: file content
 */
import { ElForm, ElDialog, ElTree } from 'element-plus'
interface FormItemRule {
    required: boolean,
    message: string,
    trigger: 'change'|'blur'
}

export type IElForm = InstanceType<typeof ElForm>
export type IElDialog = InstanceType<typeof ElDialog>
export type IElTree = InstanceType<typeof ElTree>

export type IFormRule = Record<string, FormItemRule[]>
