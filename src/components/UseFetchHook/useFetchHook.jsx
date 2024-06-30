import { useEffect, useState } from "react";

export default function useFetchHook(url, options = {}) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) {
        setErr("bad response");
        setLoading(false);
        throw new Error("something went wrong");
      } else {
        const result = await response.json();
        setData(result);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErr(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data, err };
}
