/*
 * @Author: XunL
 * @Description: 角色相关类型
 */
export interface IListParams {
    page: number;
    limit: number;
    roles_name?: string;
    status?:0|1|''
  }
export interface IRole {
    id: number
    rules: string
    level:number
    role_name:string
    status: number
}

export interface IPermission {
  id: number;
  pid: string;
  title: string;
  children:IPermission[]
}
