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
    <div>
      <div>
        <button onClick={backButton}>Back</button>
      </div>
      <img src={country.official_flag} alt={country.name + "Flag"} />
      <div>
        <span>Name: {country.name}</span>
      </div>
      <p>Capital: {country.capital ? country.capital : "-"}</p>
      <p>Continent: {country.continent ? country.continent : "-"}</p>
      <p>Subregion: {country.subregion ? country.subregion : "-"}</p>
      <p>Area: {country.area}</p>
      <p>Population: {country.population}</p>
      <div>
        {country.activities && country.activities.length > 0 ? (
          <div>
            <p>Activities</p>
            <ul>
              {country.activities.map((activity) => (
                <ul>
                  <li>Name: {activity.name}</li>
                  <li>Difficulty: {activity.difficulty}</li>
                  <li>Season: {activity.season}</li>
                </ul>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Detail;
