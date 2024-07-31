'use server';
import { redirect } from 'next/navigation';

// constants
import { API_ENDPOINT } from '@/constants/api-endpoint';
import { ROUTER } from '@/constants/router';

// models
import { UserModel } from '@/models/UserModel';

export const getUserList = async (
  page: number,
  limit: number,
  // sortBy: string = 'createdAt',
  // order: string = 'desc',
  // role: string = '',
) => {
  const USER_LIST_URL = `${process.env.API_URL || 'https://6669171e2e964a6dfed3c99a.mockapi.io'}/${API_ENDPOINT.USER_LIST}?page=${page}&limit=${limit}`;

  const res = await fetch(USER_LIST_URL, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user list');
  }

  const data: UserModel[] = await res.json();

  return data;
};

export const getTotalUsers = async () => {
  const USER_LIST_URL = `${process.env.API_URL || 'https://6669171e2e964a6dfed3c99a.mockapi.io'}/${API_ENDPOINT.USER_LIST}`;

  const res = await fetch(USER_LIST_URL, {
    cache: 'no-store',
  });

  const data = (await res.json()) as UserModel[];

  return data.length;
};

export const getUserById = async (id: string) => {
  const USER_BY_ID_URL = `${process.env.API_URL}/${API_ENDPOINT.USER_LIST}/${id}`;
  const res = await fetch(USER_BY_ID_URL, {
    cache: 'no-store',
  });

  const data: UserModel = await res.json();

  return data;
};

export const updateUserApi = async (
  id: string,
  user: {
    name: string;
    email: string;
    userRole: string;
    joined: string;
    avatar?: string;
  },
) => {
  const USER_UPDATE_URL = `${process.env.API_URL}/${API_ENDPOINT.USER_LIST}/${id}`;

  try {
    const res = await fetch(USER_UPDATE_URL, {
      method: 'PUT',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const result = await res.json();

    if (!res.ok) {
      return { message: result.message || 'Failed to update user.' };
    }

    return result;
  } catch (error) {
    return {
      message:
        (error as Error).message ||
        'An error occurred while updating the user.',
    };
  } finally {
    redirect(ROUTER.USERS);
  }
};

export const deleteUserApi = async (id: string) => {
  const USER_DELETE_URL = `${process.env.API_URL}/${API_ENDPOINT.USER_LIST}/${id}`;

  try {
    const res = await fetch(USER_DELETE_URL, {
      method: 'DELETE',
      cache: 'no-store',
    });

    const result = await res.json();

    if (!res.ok) {
      return { message: result.message || 'Failed to delete user.' };
    }

    return result;
  } catch (error) {
    return {
      message:
        (error as Error).message ||
        'An error occurred while deleting the user.',
    };
  } finally {
    redirect(ROUTER.USERS);
  }
};

export const addUserApi = async (user: {
  name: string;
  email: string;
  userRole: string;
  joined: string;
  avatar?: string;
}) => {
  const USER_ADD_URL = `${process.env.API_URL}/${API_ENDPOINT.USER_LIST}`;

  try {
    const res = await fetch(USER_ADD_URL, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...user, createdAt: new Date() }),
    });

    const result = await res.json();

    if (!res.ok) {
      return { message: result.message || 'Failed to add user.' };
    }

    return result;
  } catch (error) {
    return {
      message:
        (error as Error).message || 'An error occurred while adding the user.',
    };
  } finally {
    redirect(ROUTER.USERS);
  }
};

export const getUsers = async (): Promise<UserModel[]> => {
  const USER_LIST_URL = `${process.env.API_URL ?? 'https://6669171e2e964a6dfed3c99a.mockapi.io'}/${API_ENDPOINT.USER_LIST}`;

  const res = await fetch(USER_LIST_URL, {
    cache: 'no-store',
  });

  const data: UserModel[] = await res.json();

  return data;
};
