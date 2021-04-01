import { useEffect, useState } from 'react';

const useFetch1 = url => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = (async () => {
      const response = await fetch(url);
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
  }, [url]);
  return { data, isLoading };
};

export default useFetch1;
