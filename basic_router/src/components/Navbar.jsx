import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">종합</Link>
          </li>
          <li>
            <Link to="/realtime">실시간</Link>
          </li>
          <li>
            <Link to="/hotprice">특가</Link>
          </li>
          <li>
            <Link to="/day">일별</Link>
          </li>
          <li>
            <Link to="/monthweekly">월별/주별</Link>
          </li>
          <li>
            <Link to="/steady">스테디셀러</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
