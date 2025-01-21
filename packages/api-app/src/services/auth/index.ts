import bcrypt from "bcrypt";

// パスワードの比較
export const checkPassword = async (password: string, hash: string) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};