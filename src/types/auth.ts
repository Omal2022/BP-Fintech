export interface ValidationErrors {
  email?: string;
  password?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

