import axios, { AxiosResponse } from "axios";

class AuthService {
  async login(values: { email: string, password: string }) {
    try {
      console.log(values);

      const res = await axios.post('/api/auth/login', values, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      return res;
    } catch (error) {
      throw error;
    };
  };

  async register(values: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    gender: string,
    birthdate: Date
  }) {
    try {
      const res = await axios.post('/api/auth/register', values, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      return res;
    } catch (error) {
      throw error;
    };
  };
};

export const authService = new AuthService();