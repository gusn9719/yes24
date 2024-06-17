import { Link } from "react-router-dom";
import "../css_best/Menu.css";

export default function Menu({ path, name }) {
  return (
    <Link to={path} className="header__menu__item">
      {name}
    </Link>
  );
}
