export interface IRule {
    page: number;
    limit: number;
    roles_name?: string;
    status?:0|1|''
  }
export interface IListParams {
    keyword?: string;
    is_show?:0|1|''
  }
export interface IMenu{
  access:number;
  action:string;
  api_url:string;
  auth_type:number;
  children:IMenu[];
  controller:string;
  header:string;
  icon:string;
  id:number;
  is_del:number;
  is_header:number;
  is_show:number;
  is_show_path:number;
  menu_name:string;
  menu_path:string;
  methods:string;
  module:string;
  params:string;
  path:number[];
  pid:number;
  sort:number;
  unique_auth:string;
  statusLoading?:boolean
}
