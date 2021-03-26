import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => { // for every component render, this function is executed
    setIsloading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setIsloading(false);
        setData(data);
        setErr(null);
      })
      .catch(err => {
        setErr(err.message);
        setIsloading(false);
      });
  }, []);
  return { data, isLoading, err };
};

export default useFetch;
