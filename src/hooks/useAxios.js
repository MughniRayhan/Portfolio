import { useState } from "react";
import axios from "axios";

export default function useAxios(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const post = async (data) => {
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await axios.post(url, data);
      setResponse(res.data);
      setLoading(false);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.msg || "Something went wrong");
      setLoading(false);
      throw err;
    }
  };

  return { post, loading, error, response };
}
