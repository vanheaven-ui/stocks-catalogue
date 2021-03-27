import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => { // for every component render, this function is executed where called.
    const abortCont = new AbortController();
    setIsloading(true);
    fetch(url, { mode: 'cors', signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not load stocks, please check and try again!');
        }
        return res.json();
      })
      .then(data => {
        setIsloading(false);
        setData(data);
        setErr(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log(err.message);
        }
        setErr(err.message);
        setIsloading(false);
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, err };
};

export default useFetch;
