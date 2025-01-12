import bcrypt from "bcrypt";

// const saltRounds = 10;  // ソルトのラウンド数を指定

// // パスワードのハッシュ化
// export const hashPassword = async (password: string): Promise<string> => {
//   const salt = await bcrypt.genSalt(saltRounds);
//   const hash = bcrypt.hash(password, salt);
//   return hash;
// };

// パスワードの比較
export const checkPassword = async (password: string, hash: string) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};