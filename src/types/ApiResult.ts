export interface ApiResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode?: number;
  message?: string;
}
