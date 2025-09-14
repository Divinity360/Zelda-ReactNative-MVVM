export interface IApiResponse<T> {
  message: string;
  status: number;
  data: T[];
}
