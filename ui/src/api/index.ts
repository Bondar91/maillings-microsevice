import { config } from 'config';
class Api {
  request<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
  ): Promise<T> {
    const options: RequestInit = {
      method,
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ',
      },
    };

    if (body && method !== 'GET' && method !== 'DELETE') {
      options.body = JSON.stringify(body);
    }

    const { apiUrl } = config;
    const url = `${apiUrl}${endpoint}`;

    return fetch(url, options).then((response) => {
      return response.json();
    });
  }

  get<T>(endpoint: string) {
    return this.request<T>(endpoint, 'GET');
  }

  post<T>(endpoint: string, data: any) {
    return this.request<T>(endpoint, 'POST', data);
  }

  put<T>(endpoint: string, data: T) {
    return this.request<T>(endpoint, 'PUT', data);
  }

  delete(endpoint: string) {
    return this.request(endpoint, 'DELETE');
  }
}

const ApiHandler = new Api();

export default ApiHandler;
