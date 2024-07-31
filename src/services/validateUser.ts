'use server';
import { z } from 'zod';

// utils
import { extractFormData } from '@/utils/form';

// apis
import { addUserApi, updateUserApi } from '@/api/user';
import { uploadImage } from '@/api/image';

export type UserState = {
  errors?: {
    name?: string[];
    avatar?: string[];
    email?: string[];
    userRole?: string[];
    joined?: Date[];
  };
  message?: string | null;
};

const userKeys = ['name', 'email', 'userRole', 'joined', 'avatar'];

const FormSchema = z.object({
  id: z.string().optional(),
  name: z.string({
    invalid_type_error: 'Please enter a name.',
  }),
  email: z
    .string({
      invalid_type_error: 'Please enter an email.',
    })
    .email('Invalid email address.'),
  userRole: z.string({
    invalid_type_error: 'Please select a user role.',
  }),
  avatar: z.string().url('Invalid URL.').optional(),
  joined: z.string({
    invalid_type_error: 'Please enter a valid date.',
  }),
});

export const validateUser = async (
  id: string,
  _: UserState,
  formData: FormData,
) => {
  const extractedUser = extractFormData({ keys: userKeys, formData });

  if (formData.has('avatar') && formData.get('avatar') instanceof File) {
    const file = formData.get('avatar') as File;
    if (file.size > 0) {
      const formDataForUpload = new FormData();
      formDataForUpload.append('image', file);

      try {
        const avatarUrl = await uploadImage(formDataForUpload);
        extractedUser.avatar = avatarUrl;
      } catch (error) {
        return {
          errors: { avatar: ['Failed to upload image.'] },
          message: 'Image upload failed. Please try again.',
        };
      }
    } else {
      delete extractedUser.avatar; // Ensure avatar is not included if file size is 0
    }
  } else {
    delete extractedUser.avatar; // Ensure avatar is not included if not provided
  }

  // Validate form fields using Zod
  const validatedFields = FormSchema.safeParse(extractedUser);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update User.',
    };
  }

  const { name, email, userRole, joined, avatar } = validatedFields.data;
  const user = { name, email, userRole, joined, avatar };

  const result = await updateUserApi(id, user);

  if (result.message) {
    return { message: result.message };
  }

  return result;
};

const UserSchema = FormSchema.omit({ id: true });

export const createUser = async (_: UserState, formData: FormData) => {
  const extractedUser = extractFormData({ keys: userKeys, formData });

  if (formData.has('avatar') && formData.get('avatar') instanceof File) {
    const file = formData.get('avatar') as File;
    if (file.size > 0) {
      const formDataForUpload = new FormData();
      formDataForUpload.append('image', file);

      try {
        const avatarUrl = await uploadImage(formDataForUpload);
        extractedUser.avatar = avatarUrl;
      } catch (error) {
        return {
          errors: { avatar: ['Failed to upload image.'] },
          message: 'Image upload failed. Please try again.',
        };
      }
    } else {
      delete extractedUser.avatar; // Ensure avatar is not included if file size is 0
    }
  } else {
    delete extractedUser.avatar; // Ensure avatar is not included if not provided
  }

  // Validate form fields using Zod
  const validatedFields = UserSchema.safeParse(extractedUser);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  const { name, email, userRole, joined, avatar } = validatedFields.data;
  const user = { name, email, userRole, joined, avatar };

  const result = await addUserApi(user);

  if (result.message) {
    return { message: result.message };
  }

  return result;
};
