import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(url);
        setData(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetch();
  }, [url]);

  // console.log(data);
  return [data];
};

export default useFetch;
