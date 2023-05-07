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
    <div>
      <img src={official_flag} alt={country.name + "Flag"} />
      <div>
        <span>Name:</span>
        <NavLink to={`/detail/${id}`}>
          {" "}
          <span>{name}</span>
        </NavLink>
      </div>
      <p>Capital: {capital ? capital : "-"}</p>
      <p>Continent: {continent ? continent : "-"}</p>
      <p>Subregion: {subregion ? subregion : "-"}</p>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
    </div>
  );
}

export default Card;
