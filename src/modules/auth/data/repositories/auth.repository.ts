import type { ApiResult } from "@/types/ApiResult";
import type { User } from "@/types/User";

const mockUser: User = {
  id: "24efc424-393b-4127-bc9c-4ed06904f052",
  email: "test@vendorhub.com",
  name: "Test User",
  password: "Test123!",
  role: "user",
  isActive: true,
};

const accessJwtToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJWZW5kb3JIdWIiLCJpYXQiOjE3NDg4MzAwMTAsImV4cCI6MTc4MDM2NjAxMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoidGVzdEB2ZW5kb3JodWIuY29tIiwiR2l2ZW5OYW1lIjoiVGVzdCIsIlN1cm5hbWUiOiJVc2VyIiwiRW1haWwiOiJ0ZXN0QHZlbmRvcmh1Yi5jb20iLCJSb2xlIjoidXNlciJ9.KCPfsWJMEzMRsjkG7PqBwQiaFQRavF_zom1jNlghwEo";

export class AuthRepository {
  static async signIn(
    email: string,
    password: string
  ): Promise<ApiResult<void>> {
    await new Promise((res) => setTimeout(res, 1000));

    if (email !== mockUser.email || password !== mockUser.password) {
      return {
        success: false,
        statusCode: 401,
        message:
          "Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.",
      };
    }

    const user = {
      id: mockUser.id,
      email: mockUser.email,
      name: mockUser.name,
      role: mockUser.role,
      isActive: mockUser.isActive,
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", accessJwtToken);

    return {
      success: true,
      statusCode: 200,
      message: "Sesión iniciada correctamente",
    };
  }
}
