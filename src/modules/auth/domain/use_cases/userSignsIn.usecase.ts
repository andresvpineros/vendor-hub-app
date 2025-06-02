import type { ApiResult } from "@/types/ApiResult";
import { AuthRepository } from "../../data/repositories/auth.repository";

export class UserSignsInUseCase {
  async call(email: string, password: string): Promise<ApiResult<void>> {
    return AuthRepository.signIn(email, password);
  }
}
