import { UserRole } from './userRoles';
import path from 'path';

export const storageStateMap: Record<UserRole, string> = {
  champuser: path.resolve('auth/champuser.auth.json'),
  standarduser: path.resolve('auth/standarduser.auth.json'),
  poweruser: path.resolve('auth/poweruser.auth.json'),
  clientuser: path.resolve('auth/clientuser.auth.json'),
  adminuser: path.resolve('auth/adminuser.auth.json'),
};
