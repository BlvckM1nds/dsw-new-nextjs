import bcrypt from "bcrypt";

class EncryptionUtil {
  async hashPassword(password: string): Promise<string> {
    const salt = 10;
    return await bcrypt.hash(password, salt);
  };

  async checkPassword(inputPassword: string, storedPassword: string): Promise<boolean> {
    return bcrypt.compare(inputPassword, storedPassword);
  };
};

export const encryptUtils = new EncryptionUtil();