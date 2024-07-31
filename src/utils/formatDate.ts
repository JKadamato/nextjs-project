export const formatDate = (date: Date | string | number): string => {
  const parsedDate = date instanceof Date ? date : new Date(date);
  return !isNaN(parsedDate.getTime())
    ? parsedDate.toISOString().split('T')[0]
    : '';
};
