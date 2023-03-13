import axios from 'axios';

interface Params {
  baseUrl: string;
  headers: object;
  method: string;
}

const getConfig: Params = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  headers: {
    Authorization: '',
  },
  method: 'get',
};

export const getApi = async (url: string, data: string): Promise<object> => {
  return await axios({ ...getConfig, url: `${getConfig.baseUrl}/${url}/${data}` })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        status: error.status,
        data: error.response,
      };
    });
};
