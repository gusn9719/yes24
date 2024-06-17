import React from "react";
import BestBook from "../components_best/BestBook";
import useAxiosBooks from "../apis/axiosBooks.js";

export default function RealTimeBestSeller() {
  const bookList = useAxiosBooks("realTime");

  return (
    <>
      <BestBook bestBookList={bookList} />
    </>
  );
}
