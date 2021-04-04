import { useEffect, useState } from 'react';

const useFetch1 = url => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();
    setIsLoading(true);
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      signal: abortCont.abort(),
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        const alert = document.createElement('div');
        alert.innerHTML = err.message;
        alert.classList.add('my-alert');
        document.body.insertAdjacentElement('afterbegin', alert);

        setTimeout(() => alert.remove(), 1000);
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading };
};

export default useFetch1;
