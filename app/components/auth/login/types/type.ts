export interface SigninPayload {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  username: string;
  email: string;
}

export interface SigninResponse {
  message?: string;
  user?: AuthUser;
}

export interface ApiError {
  message: string;
  status?: number;
}