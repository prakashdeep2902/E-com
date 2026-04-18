import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const useFetchApi = (Api) => {
  const [Res, setres] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasloaded = useRef(false);

  useEffect(() => {
    if (hasloaded.current) return;
    hasloaded.current = true;
    async function TriggerApis() {
      try {
        const response = await axios.get(Api);
        setres(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    TriggerApis();
  }, [Api]);

  return { response: Res, loading };
};
