import Button from "./Button.jsx";
import "../css_best/AladinBestBook.css";

export default function BestBook({ bestBookList }) {
  //! props를 통해 넘어오는 객체는 반드시 데이터 존재여부를 체크해야함.
  const list = bestBookList && bestBookList.list ? bestBookList.list : [];
  const title = bestBookList ? bestBookList.title : "";

  return (
    <div className="best-book">
      <h3 className="best-book-title">{title}</h3>
      <ul className="best-book-list">
        {list.map((bestBook) => (
          <li className="best-book-list-content" key={bestBook.id}>
            <BestBookImageAvata img={bestBook.image} />
            <BestBookInfo info={bestBook.info} />
            <BestBookBuy />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BestBookImageAvata({ img }) {
  return (
    <div className="best-book-image-avata">
      <img className="best-book-image" src={img} />
      <div className="best-book-image-option">
        <p>새창열기</p>
        <p>크게보기</p>
      </div>
    </div>
  );
}

export function BestBookInfo({ info }) {
  const price_org = info.price.toLocaleString();
  const price_cur = Math.trunc(info.price * info.sale_per).toLocaleString();
  const point = info.point.toLocaleString();
  const sales_point = info.sales_point.toLocaleString();
  const per = info.sale_per * 100 - 100;
  return (
    <div className="best-book-info">
      <div className="best-book-info-title">
        <p>[{info.kind}]</p>
        <p className="best-book-info-title-name">{info.title}</p>
      </div>
      <div className="best-book-info-pub">
        <p>
          <span className="best-book-info-pub-author">{info.author}</span>
          (지은이)
        </p>
        <p className="best-book-info-pub-publisher">{info.publisher}</p>
        <p>2024년 3월</p>
      </div>
      <div className="best-book-info-price">
        <p>
          {price_org}원 <span>➡ </span>
          <span className="best-book-info-price-cur info-color">
            {price_cur}원
          </span>
          (<span className="info-color">{per}%</span>할인), 마일리지{" "}
          <span className="info-color">{point}</span>원 (
          <span className="info-color">5%</span>적립)
        </p>
      </div>
      <div className="best-book-info-sales">
        <p className="best-book-info-sales-review">
          💚💚💚💚💚({info.review_count})
        </p>
        <p>
          세일즈포인트 :
          <span className="best-book-info-sales-point">{sales_point}</span>
        </p>
      </div>
      <p className="info-color">
        <Button text="양탄자배송" className="quick-delivery" />
        내일 아침 7시 <strong>출근전 배송</strong>
      </p>
      <p>(중구 서소문로 89-31) 지역변경</p>
    </div>
  );
}

export function BestBookBuy() {
  return (
    <div className="best-book-buy">
      <Button text="장바구니" className="button-cart" />
      <Button text="바로구매" className="button-buy" />
      <Button text="보관함 🔽" className="button-list" />
    </div>
  );
}
