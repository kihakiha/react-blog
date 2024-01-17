export enum EUserRoles {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: EUserRoles[]
}

export interface UserSchema {
  authData?: IUser;
  _inited: boolean;
}
