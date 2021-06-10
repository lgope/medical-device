// Model
export interface IModel {
  model: {
    Id: Number;
    DataType: String;
    Brand: String;
    Model: String;
    Name: String;
    DisplayName: String;
    Description: String;
    Status: any;
    GroupId: any;
    ProtocolOrder: any;
  };
}

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

export interface DeviceState {
  availableDevices: Array<Object>;
  models: Array<Object>;
  dataIsLoading: Boolean;
  modelsDataIsLoading: Boolean;
  deviceDetail: Object;
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
