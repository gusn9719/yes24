import React from "react";
import useAxiosBooks from "../apis/axiosBooks.js";
import BestBook from "../components_best/BestBook";

export default function DayBestSeller() {
  const bookList = useAxiosBooks("day");
  return (
    <>
      <BestBook bestBookList={bookList} />
    </>
  );
}
