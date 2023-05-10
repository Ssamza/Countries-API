import style from "./card.module.css";
import { NavLink } from "react-router-dom";

function Card({ country }) {
  const {
    id,
    official_flag,
    name,
    capital,
    continent,
    subregion,
    area,
    population,
  } = country;

  return (
    <div className={style.container}>
      <div className={style.org}>
        <div className={style.back}>
          <img
            className={style.img}
            src={official_flag}
            alt={country.name + "Flag"}
          />
        </div>
        <hr className={style.hr} />
        <div className={style.textC}>
          <div className={style.text}>
            <NavLink to={`/detail/${id}`} className={style.line}>
              {" "}
              <span className={style.url}>{name}</span>
            </NavLink>
            <p>
              Continent:{" "}
              <span className={style.cont}>{continent ? continent : "-"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
