import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * this is used for update the document title
 *
 * @param url url
 * @param config {}
 * @returns loading, is data in loading
 * @returns error,  error message when load failed
 * @returns data, loaded data when load success
 * @example
 * useFetch('/user?ID=12345', {
    params: {
      ID: 12345
    }
   })
 */
const useFetch = (url = '', config = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    axios.get(url, config)
      // .then(res => res.json())
      .then(res => {
        if (isMounted) {
          setData(res.data);
          setError(null);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [url, config]);

  return { loading, error, data };
};

export default useFetch;
