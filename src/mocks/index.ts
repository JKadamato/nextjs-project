import { RoleModel } from '@/models/RoleModel';
import { SelectType } from '@/types/SelectType';

export const roleOptions: SelectType[] = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
];

export const listCategory = [
  {
    id: '1',
    label: 'Email',
  },
  {
    id: '2',
    label: 'Full Name',
    options: [
      { value: 'asc', label: 'Asc' },
      { value: 'desc', label: 'Desc' },
    ],
  },
  {
    id: '3',
    label: 'Role',
    options: [],
  },
  {
    id: '4',
    label: 'Joined',
    options: [
      { value: 'asc', label: 'Asc' },
      { value: 'desc', label: 'Desc' },
    ],
  },
];

export const users = [
  {
    avatar: 'https://s.net.vn/Ur2Q',
    email: 'kaith.tolbeten@manity.io',
    name: 'Kaith Tolbeten',
    role: 'HR Lead',
    joinDate: '07/27/2019',
    status: '5m ago',
  },
  {
    avatar: 'https://s.net.vn/Ur2Q',
    email: 'yogarasa.gandhi@manity.io',
    name: 'Yogarasa Gandhi',
    role: 'Account Manager',
    joinDate: '05/24/2019',
    status: '4h ago',
  },
  {
    avatar: 'https://s.net.vn/Ur2Q',
    email: 'igor.antonovich@gusky.com',
    name: 'Igor Antonovich',
    role: 'HR Director',
    joinDate: '01/01/2018',
    status: 'Online',
  },
  {
    avatar: 'https://s.net.vn/Ur2Q',
    email: 'georges.embolo@aufity.it',
    name: 'Georges Embolo',
    role: 'HR Manager',
    joinDate: '04/02/2019',
    status: 'Archived',
  },
  {
    avatar: 'https://s.net.vn/Ur2Q',
    email: 'cecilia.pozo@melan.ai',
    name: 'Cecilia Pozo',
    role: 'Head of HR',
    joinDate: '01/24/2018',
    status: '6d ago',
  },
  {
    avatar: 'https://s.net.vn/Ur2Q',
    email: 'alf.huncoot@aufity.it',
    name: 'Alf Huncoot',
    role: 'HR Manager',
    joinDate: '07/27/2019',
    status: '5 May',
  },
  {
    avatar: 'https://s.net.vn/Ur2Q',
    email: 'amish.shiravadakar@turlan.it',
    name: 'Amish Shiravadakar',
    role: 'HR Lead',
    joinDate: '07/27/2019',
    status: 'Never',
  },
];

export const roles: RoleModel[] = [
  { id: 1, name: 'Admin', description: 'Administrator role' },
  { id: 2, name: 'User', description: 'Regular user role' },
  { id: 3, name: 'Guest', description: 'Guest user role' },
];
