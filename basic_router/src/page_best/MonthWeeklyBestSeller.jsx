import React from "react";
import BestBook from "../components_best/BestBook";
import useAxiosBooks from "../apis/axiosBooks.js";
export default function MonthWeeklyBestSeller() {
  const bookList = useAxiosBooks("monthWeeklybest");
  return (
    <>
      <BestBook bestBookList={bookList} />
    </>
  );
}
