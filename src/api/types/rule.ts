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
