import api from "../../../../axios/axios";
import {
  SigninPayload,
  SigninResponse,
  ApiError,
} from "../types/type";


function normalizeError(error: any): ApiError {
  const status = error?.response?.status;

  const message =
    error?.response?.data?.message ||
    error?.response?.data?.detail ||
    error?.message ||
    "ایمیل یا رمز عبور اشتباه است.";

  return { message, status };
}

export const authService = {
 
  async signin(payload: SigninPayload): Promise<SigninResponse> {
    try {
      const response = await api.post<SigninResponse>(
        "/auth/signin",
        {
          email: payload.email.trim().toLowerCase(),
          password: payload.password,
        },
        { withCredentials: true }
      );

      return response.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },
};

export default authService;