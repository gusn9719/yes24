import React from "react";
import BestBook from "../components_best/BestBook";
import useAxiosBooks from "../apis/axiosBooks.js";
export default function HotPriceBestSeller() {
  const bookList = useAxiosBooks("hotPrice");
  return (
    <>
      <BestBook bestBookList={bookList} />
    </>
  );
}
