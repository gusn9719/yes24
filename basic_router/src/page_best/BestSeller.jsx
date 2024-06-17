import React from "react";
import BestBook from "../components_best/BestBook";
import useAxiosBooks from "../apis/axiosBooks.js";

export default function BestSeller() {
  const bookList = useAxiosBooks("bestSeller");

  // const [bestList, setBestList] = useState({});
  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8080/bestSeller")
  //     .then((result) => setBestList(result.data))
  //     .catch((error) => console.log(error));

  // }, []);

  return (
    <>
      <BestBook bestBookList={bookList} />
    </>
  );
}
