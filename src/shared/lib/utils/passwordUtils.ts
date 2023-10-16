
//placeholders, should be handled on backend
export const hashPassword = (password: string): string => {
  return password;
};

export const compareHashedPassword = (
  password: string,
  hashedPassword: string,
): boolean => {
  return password === hashedPassword
};
