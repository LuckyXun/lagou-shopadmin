export interface ILoginInfo {
  logo_square: string;
  logo_rectangle: string;
  login_logo: string;
  slide: string[];
}

export interface IMenu {
  header: string;
  icon: string;
  is_header: number;
  path: string;
  title: string;
  children:IMenu[]
}

export interface IUserInfo {
  account: string;
  head_pic: string;
  id: number;
}

export interface ILoginResponse {
  status: number;
  expires_time: number;
  version: string;
  logo: string;
  logo_square: string;
  newOrderAudioLink: string;
  token: string;
  menus: IMenu[];
  unique_auth: string[];
  user_info: IUserInfo;
}
