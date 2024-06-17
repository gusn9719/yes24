import * as repository from "../repository/bestSellerRepository.js";

/* 
  종합 베스트 셀러
*/

export const getBestSeller = async (req, res) => {
  const type = req.params.type;
  const books = await repository.getBestSeller(type);
  res.json(books);
};
