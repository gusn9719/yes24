import React from "react";
import BestBook from "../components_best/BestBook";
import useAxiosBooks from "../apis/axiosBooks.js";
export default function SteadySeller() {
  const bookList = useAxiosBooks("steady");
  return (
    <>
      <BestBook bestBookList={bookList} />
    </>
  );
}
