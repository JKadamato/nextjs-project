// constants
import { API_ENDPOINT } from '@/constants/api-endpoint';

// models
import { RoleModel } from '@/models/RoleModel';

export const getRoleList = async () => {
  const USER_LIST_URL = `${process.env.API_URL || 'https://6669171e2e964a6dfed3c99a.mockapi.io'}/${API_ENDPOINT.ROLE_LIST}`;

  const res = await fetch(USER_LIST_URL, {
    cache: 'no-store',
  });

  const data: RoleModel[] = await res.json();

  return data;
};

export const getRoleById = async (id: string) => {
  const ALL_ROLES_URL = `${process.env.API_URL || 'https://6669171e2e964a6dfed3c99a.mockapi.io'}/${API_ENDPOINT.ROLE_LIST}/${id}`;

  const res = await fetch(ALL_ROLES_URL, {});

  const data: RoleModel = await res.json();

  return data;
};
