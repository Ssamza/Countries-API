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
    navigate("/");
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
    </div>
  );
}

export default Detail;
