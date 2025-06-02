export interface User {
  id: string;
  email: string;
  name: string;
  password?: string;
  role: "admin" | "user";
  isActive: boolean;
}
