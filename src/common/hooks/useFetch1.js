import { useEffect, useState } from 'react';

const useFetch1 = url => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();
    setIsLoading(true);
    const fetchData = (async () => {
      const response = await fetch(url, {
        signal: abortCont.signal,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw Error(`Encountered error: ${response.status}`);
      }
      const stockss = await response.json();
      return stockss;
    })();

    fetchData.then(stocks => {
      setIsLoading(false);
      setData(stocks);
    });

    fetchData.catch(err => {
      const alert = document.createElement('div');
      alert.innerHTML = err.message;
      document.body.insertAdjacentElement('afterbegin', alert);

      setTimeout(() => alert.remove(), 1000);
    });

    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading };
};

export default useFetch1;
