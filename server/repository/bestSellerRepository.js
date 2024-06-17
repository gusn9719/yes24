import { promises as fsPromises } from "fs";

/* 종합 */
const path = "data/best_book_all.json";
export const getBestSeller = (type) => {
  const books = fsPromises
    .readFile(path, "utf8")
    .then((data) => JSON.parse(data)[type])
    .catch((error) => console.log(error));
  return books;
};
