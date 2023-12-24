export {
  userReducer,
  userAction
} from './model/slice/UserSlice';
export {
  IUser,
  UserSchema
} from './model/types/user'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserInited } from './model/selectors/getUserInited/getUserInited'
