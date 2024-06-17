import { useEffect, useState } from "react";
import axios from "axios";
export default function useAxiosBooks(type) {
  const [bestList, setBestList] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/${type}`)
      .then((result) => setBestList(result.data))
      .catch((error) => console.log(error));
  }, []);

  return bestList;
}
