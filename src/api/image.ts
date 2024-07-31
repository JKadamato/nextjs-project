export const uploadImage = async (image: FormData): Promise<string> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_UPLOAD_URL}?key=${process.env.NEXT_PUBLIC_UPLOAD_KEY}`,
      {
        method: 'POST',
        body: image,
      },
    );

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const result = await response.json();
    return result.data.url;
  } catch (error) {
    throw new Error();
  }
};
