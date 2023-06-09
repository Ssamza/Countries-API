import style from "./detail.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  cleanDetail,
  delActivities,
  getActivities,
  getCountryDetail,
} from "../../redux/action";

function Detail() {
  const country = useSelector((state) => state.countryDetail);
  const activities = useSelector((state) => state.activities);
  const [updateAct, setUpdateAct] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUpdateAct(false);
    dispatch(getCountryDetail(id));
    dispatch(getActivities());
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id, updateAct]);

  function backButton() {
    navigate("/home");
  }

  function handleChange() {
    const idAct = activities.find((activity) =>
      country.activities.some((countryAct) => countryAct.name === activity.name)
    );
    console.log("filtrado", idAct);

    if (idAct) {
      dispatch(delActivities(idAct.id));
      setUpdateAct(true);
    }
  }

  return (
    <div>
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
            src={country.flags}
            alt={country.name + " flag"}
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
                    <button
                      className={style.delete}
                      onClick={handleChange}
                      title={`Click to eliminate`}
                    >
                      ⛔
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Detail;
