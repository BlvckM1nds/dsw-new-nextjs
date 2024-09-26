import { axiosInstance } from "@/utils/requester";
import { AxiosResponse } from "axios";

class AuthService {
  async register(values: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    gender: string,
    birthdate: Date
  }): Promise<AxiosResponse> {
    try {
      const res = await axiosInstance.post('/auth/register', values, {
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

  async login(values: { email: string, password: string }): Promise<AxiosResponse> {
    try {
      const res = await axiosInstance.post('/auth/login', values, {
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
};

export const authService = new AuthService();