import axios, { type AxiosRequestConfig } from 'axios';
import { useEffect, useMemo, useState } from 'react';

export const useGet = <T>(props: AxiosRequestConfig<unknown>): [boolean, T | undefined, string] => {
  const config = useMemo(() => ({ ...props }), [props]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState('');

  useEffect(() => {
    const sendRequest = (): void => {
      setLoading(true);

      axios(config)
        .then((response) => {
          setError('');
          setData(response.data);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    sendRequest();
  }, [config]);

  return [loading, data, error];
};
