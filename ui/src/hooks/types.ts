export interface IResponse<T> {
  data: T | null;
  hasError: boolean;
  errorMessage: string;
  isLoading: boolean;
}

export type IUseFetch = <T>(
  url: string,
  method?: string,
  body?: any,
  headers?: {
    [key: string]: string;
  },
) => IResponse<T>;
