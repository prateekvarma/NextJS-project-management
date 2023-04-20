import bcrypt from 'bcrypt';

export const hashPassword = (password) => bcrypt.hashPassword(password, 10);

export const comparePasswords = (plaintextPassword, hashedPassword) => {
  return bcrypt.comparePassword(plaintextPassword, hashedPassword);
};
