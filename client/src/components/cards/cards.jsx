import style from "./cards.module.css";
import Card from "../card/card";

function Cards({ allCountries }) {
  return (
    <div>
      {allCountries.map((country) => {
        return <Card country={country} />;
      })}
    </div>
  );
}

export default Cards;
