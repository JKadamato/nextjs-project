export interface UserModel {
  id: string;
  name: string;
  email: string;
  userRole: string;
  avatar: string;
  joined: Date;
  createAt?: Date;
  roleName?: string;
}
