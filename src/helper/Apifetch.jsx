import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const Apifetch = ({ Api, method }) => {
  console.log(Api);
  const [res, setRes] = useState([]);
  const hasref = useRef(false);
  useEffect(() => {
    if (hasref.current) return;
    hasref.current = true;

    async function fetchData() {
      try {
        const data = await axios[method](Api);

        console.log(data);
      } catch (error) {
        setRes();
      }
    }
    fetchData();
  }, []);

  return {};
};
