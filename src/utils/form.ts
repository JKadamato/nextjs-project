export const extractFormData = ({
  keys,
  formData,
}: {
  keys: string[];
  formData: FormData;
}): Record<string, string | null> => {
  const result: Record<string, string | null> = {};

  if (!keys || !formData) {
    return {};
  }
  keys.forEach((key) => {
    const value = formData.get(key);
    if (value instanceof File) {
      // Handle File type
      result[key] = value.name;
    } else {
      // For other types (string, null, etc.)
      result[key] = (value as string) || null;
    }
  });
  return result;
};
