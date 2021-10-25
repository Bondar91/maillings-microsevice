import { config } from 'config';

type ConfigApi = {
  method?: string;
  body?: any;
  headers: {
    [key: string]: string;
  };
};

class Api {
  request<T>(
    endpoint: string,
    method: string = 'GET',
    data: object | null = null,
  ): Promise<T> {
    const configApi: ConfigApi = {
      method,
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ',
      },
    };

    if (method === 'POST' || method === 'PATCH') {
      configApi.body = JSON.stringify(data);
    }
    const { apiUrl } = config;
    const url = `${apiUrl}${endpoint}`;
    return fetch(url, configApi).then((response) => {
      return response.json();
    });
  }

  get(endpoint: string) {
    return this.request(endpoint);
  }

  // post<T extends {}, P>(endpoint: string, data: T) {
  //   return this.request<P>(endpoint, 'POST', data);
  // }

  // put<T extends {}, P>(endpoint: string, data: T) {
  //   return this.request<P>(endpoint, 'PUT', data);
  // }

  _delete(endpoint: string) {
    return this.request(endpoint, 'DELETE');
  }
}

const ApiHandler = new Api();

export default ApiHandler;
