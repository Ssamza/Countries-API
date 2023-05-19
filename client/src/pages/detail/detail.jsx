import style from "./detail.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { cleanDetail, getCountryDetail } from "../../redux/action";

function Detail() {
  const country = useSelector((state) => state.countryDetail);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCountryDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  function backButton() {
    navigate("/home");
  }

  return (
    <div className={style.back}>
      <div className={style.imageC}>
        <img
          className={style.image}
          src={require("../../images/travel.png")}
          alt=""
        />
      </div>
      <div className={style.buttonC}>
        <button className={style.button} onClick={backButton}>
          Back
        </button>
      </div>
      <div className={style.id}>
        <span>#{country.id}</span>
      </div>
      <div className={style.flagC}>
        <img
          className={style.flag}
          src={country.official_flag}
          alt={country.name + "Flag"}
        />
      </div>
      <div className={style.nameC}>
        <span className={style.name}>{country.name}</span>
      </div>
      <div className={style.text}>
        <p>Capital: {country.capital ? country.capital : "-"}</p>
        <p>Continent: {country.continent ? country.continent : "-"}</p>
        <p>Subregion: {country.subregion ? country.subregion : "-"}</p>
        <p>
          Area: {country.area ? country.area.toLocaleString() + " km²" : "-"}
        </p>
        <p>
          Population:{" "}
          {country.population ? country.population.toLocaleString() : "-"}
        </p>
      </div>
      <div>
        {country.activities && country.activities.length > 0 ? (
          <div className={style.activity}>
            <p className={style.title}>
              {" "}
              <i
                className={`${style.icon} fas fa-solid fa-mountain-sun`}
              ></i>{" "}
              Activities
            </p>
            <hr />
            <div>
              <br />
              {country.activities.map((activity) => (
                <div className={style.props}>
                  <h3 className={style.actName}>{activity.name}</h3>
                  <span>Difficulty: {activity.difficulty}</span>
                  <span>Season: {activity.season}</span>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Detail;
