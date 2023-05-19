import style from "./home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCountries, getCountries } from "../../redux/action";
import Cards from "../../components/cards/cards";
import Nav from "../../components/nav/nav";
import Filters from "./filters";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
    return () => {
      dispatch(clearCountries());
    };
  }, [dispatch]);

  function createActivity() {
    navigate("/form");
  }

  //?PAGINADO

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(allCountries.length / pageSize);
  const indexOfLastCountry = currentPage * pageSize; // = 10
  const indexOfFirstCountry = indexOfLastCountry - pageSize; // = 10
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const previous = () => {
    if (indexOfFirstCountry < 1) return;
    setCurrentPage(currentPage - 1);
  };

  const next = () => {
    if (indexOfLastCountry >= allCountries.length) return;
    setCurrentPage(currentPage + 1);
  };

  //?

  return (
    <div>
      <div>
        <Filters allCountries={allCountries} />
      </div>
      <div className={style.form}>
        <button className={style.button} onClick={createActivity}>
          <i class="fa-solid fa-mountain-sun"></i> Share an Activity
        </button>
      </div>
      <div>
        <Nav />
      </div>
      <div>
        <Cards allCountries={currentCountries} />
      </div>
      <div className={style.pages}>
        <button onClick={() => previous()}>{"\u00AB"}</button>
        {Array.from({ length: totalPages }).map((x, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => next()}>{"\u00BB"}</button>
      </div>
    </div>
  );
}

export default Home;
