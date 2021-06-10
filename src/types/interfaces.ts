// Device
export interface IADevice {
  Id?: string | number | null | undefined;
  BrandId?: String;
  Name?: String;
  TypeId?: Number;
  Comment?: string | null;
  Description?: String;
}

export interface IDevice {
  modalShow?: Boolean;
  toggleModalVisibility?(): void;
  device: IADevice;
}

// ERRORS
export interface IMsg {
  msg: string | any;
}


export interface AuthState {
  token: any;
  isAuthenticated: Boolean;
  isLoading: Boolean;
  user: any;
}

export interface LoginPaylod {
  access_token: any;
  user: {
    email: any;
  };
}

export interface IAuthFunction {
  name?: string;
  email: string;
  password: string;
}
