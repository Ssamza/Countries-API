import style from "./card.module.css";

function Card({ country }) {
  const {
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
      <p>Name: {name}</p>
      <p>Capital: {capital ? capital : "-"}</p>
      <p>Continent: {continent ? continent : "-"}</p>
      <p>Subregion: {subregion ? subregion : "-"}</p>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
    </div>
  );
}

export default Card;
