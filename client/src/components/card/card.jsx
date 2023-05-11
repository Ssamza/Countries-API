import style from "./card.module.css";
import { NavLink } from "react-router-dom";

function Card({ country }) {
  const { id, official_flag, name, continent } = country;

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
            <span className={style.name}>{name}</span>
            <p>
              {continent === "Europe" && (
                <i
                  className={`${style.icon} fas fa-duotone fa-earth-europe`}
                ></i>
              )}
              {continent === "North America" && (
                <i
                  className={`${style.icon} fas fa-duotone fa-earth-americas`}
                ></i>
              )}
              {continent === "South America" && (
                <i
                  className={`${style.icon} fas fa-duotone fa-earth-americas`}
                ></i>
              )}
              {continent === "Africa" && (
                <i
                  className={`${style.icon} fas fa-duotone fa-earth-africa`}
                ></i>
              )}
              {continent === "Asia" && (
                <i className={`${style.icon} fas fa-duotone fa-earth-asia`}></i>
              )}
              {continent === "Oceania" && (
                <i
                  className={`${style.icon} fas fa-duotone fa-earth-oceania`}
                ></i>
              )}
              {continent === "Antarctica" && (
                <i
                  className={`${style.Ant} fas fa-sharp fa-light fa-earth-oceania`}
                ></i>
              )}{" "}
              <span className={style.cont}>{continent ? continent : "-"}</span>
            </p>
            <div className={style.buttonC}>
              <NavLink to={`/detail/${id}`} className={style.button}>
                <button className={style.button1}>Info+</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
