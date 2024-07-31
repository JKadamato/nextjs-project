'use client';
import { ChangeEvent, useCallback, useState } from 'react';
import { useFormState } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

// models
import { UserModel } from '@/models/UserModel';

// components
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown';
import { SubmitButton } from '@/components/SubmitButton';

// models

// utils
import { formatDate } from '@/utils/formatDate';

// Types
import { SelectType } from '@/types/SelectType';

// services
import { createUser, UserState, validateUser } from '@/services/validateUser';

// apis
import { uploadImage } from '@/api/image';

// constants
import { REGEX } from '@/constants/regex';
import { MAX_SIZE } from '@/constants/sizeImg';

interface UserFormProps {
  id?: string;
  user?: UserModel;
  roleName?: string;
  roleOptions?: SelectType[];
  selectedRole?: string;
  userRoleId?: string;
}

const UserForm = ({
  id,
  user,
  roleName,
  roleOptions = [],
  selectedRole = '',
  userRoleId = '',
}: UserFormProps) => {
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Welcome aboard! We are excited you are here, and we look forward to working with you. We know with your skills and experience you're a great asset to our department. If you have any questions during your first week, please contact me at any time.",
  );

  const [initialFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    joined: user?.joined ? formatDate(user.joined) : new Date().toISOString(),
    userRole: selectedRole || '',
    avatar: user?.avatar || '',
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (name: string, value: string) => {
    if (name === 'welcomeMessage') {
      setWelcomeMessage(value);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleRoleChange = (role: string) => {
    setFormData((prevState) => ({
      ...prevState,
      userRole: role,
    }));
  };

  const joinedDate = formData.joined ? new Date(formData.joined) : new Date(0);

  const formattedDate = formatDate(joinedDate);
  const initialState: UserState = { message: null, errors: {} };

  const updateUSerWithId = validateUser.bind(null, id || '');

  const [state, dispatch] = useFormState(
    id ? updateUSerWithId : createUser,
    initialState,
  );

  const [_, setPreviewURL] = useState<string>('');

  const handleChangeFile = useCallback(
    (callback: (value: string) => void) =>
      async (e: ChangeEvent<HTMLInputElement>) => {
        const file = (e.target.files && e.target.files[0]) as File;

        if (!file) {
          return;
        }

        if (!REGEX.IMG.test(file.name)) {
          return Error('Invalid');
        }

        // Check size of image
        if (file.size > MAX_SIZE) {
          return Error('File size is too large');
        }

        try {
          const previewImage: string = URL.createObjectURL(file);
          const formData = new FormData();

          formData.append('image', file);
          setPreviewURL(previewImage);

          const result = await uploadImage(formData);
          callback(result);
        } catch (error) {
          throw Error();
        }
      },
    [],
  );

  const hasFormChanged = () => {
    const data = JSON.stringify(formData) !== JSON.stringify(initialFormData);
    return data;
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
      action={dispatch}
    >
      <h2 className="text-xl font-bold mb-4">{roleName} role</h2>
      <p className="text-sm text-gray-600 mb-4">
        Everyone who works on your {roleName} can have different roles
        <a href="#" className="text-blue-500 ml-1">
          learn more
        </a>
      </p>
      <div className="mb-4">
        <Input
          type="text"
          value={formData.name}
          customClass="mt-1 p-2 w-full border rounded-md"
          name="name"
          onChange={(value) => handleInputChange('name', value)}
          label="Type Candidate Name"
          aria-describedby="name-error"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-red-600" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="mb-4">
        <Input
          type="email"
          value={formData.email}
          customClass="mt-1 p-2 w-full border rounded-md"
          name="email"
          onChange={(value) => handleInputChange('email', value)}
          label="Type Candidate Email"
          aria-describedby="email-error"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className="mt-2 text-sm text-red-600" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="mb-4">
        <Input
          type="date"
          value={formattedDate}
          customClass="mt-1 p-2 w-full border rounded-md"
          name="joined"
          onChange={(value) => handleInputChange('joined', value)}
          label="Join Date"
          aria-describedby="joined-error"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.joined &&
            state.errors.joined.map((error: string) => (
              <p className="mt-2 text-sm text-fill-danger" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Avatar
        </label>
        <div className="flex items-center space-x-4">
          <div className="relative w-1/2">
            {formData.avatar ? (
              <Image
                src={formData.avatar}
                alt="Current Avatar"
                className="w-full h-28 object-cover rounded-md"
                width={100}
                height={100}
              />
            ) : (
              <p className="text-gray-500">No file chosen</p>
            )}
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              name="avatar"
              onChange={handleChangeFile((value) =>
                handleInputChange('avatar', value),
              )}
              aria-describedby="avatar-error"
              required
            />
          </div>
        </div>

        <div id="avatar-error" aria-live="polite" aria-atomic="true">
          {state.errors?.avatar &&
            state.errors.avatar.map((error: string) => (
              <p className="mt-2 text-sm text-red-600" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Select Role
        </label>
        <Dropdown
          label={selectedRole}
          options={roleOptions}
          onChange={handleRoleChange}
          value={userRoleId}
          customClass="mt-1 p-2 min-w-full rounded-md border py-4"
          aria-describedby="userRole-error"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.userRole &&
            state.errors.userRole.map((error: string) => (
              <p className="mt-2 text-sm text-red-600" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Welcome Message
        </label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          rows={4}
          name="welcomeMessage"
          value={welcomeMessage}
          onChange={(e) => handleInputChange('welcomeMessage', e.target.value)}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Link href="/users">
          <Button customClass="px-4 py-2 border rounded-md" variant="outline">
            Cancel
          </Button>
        </Link>
        <SubmitButton
          label={id ? 'Update User' : 'Create User'}
          disabled={!hasFormChanged()}
        />
      </div>
    </form>
  );
};

export default UserForm;
