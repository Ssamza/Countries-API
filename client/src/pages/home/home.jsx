import style from "./home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import {  getCountries } from "../../redux/action";
import Cards from "../../components/cards/cards";
import Nav from "../../components/nav/nav";
import Filters from "./filters";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCountries = useSelector((state) => state.allCountries);
  console.log(allCountries);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (allCountries.length === 0) {
      dispatch(getCountries());
    }
  }, []);

  function createActivity() {
    navigate("/form");
  }

  //?PAGINADO

  const pageSize = 10;
  const totalPages = Math.ceil(allCountries.length / pageSize);
  const indexOfLastCountry = currentPage * pageSize;
  const indexOfFirstCountry = indexOfLastCountry - pageSize;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const previous = () => {
    if (indexOfFirstCountry < 1) return;
    setCurrentPage(currentPage - 1);
    navigate(`/home/${currentPage - 1}`);
  };

  const next = () => {
    if (indexOfLastCountry >= allCountries.length) return;
    setCurrentPage(currentPage + 1);
    navigate(`/home/${currentPage + 1}`);
  };

  //?

  //loading screen...
  const [buffering, setBuffering] = useState(false);

  setTimeout(() => {
    setBuffering(true);
  }, 900);

  return (
    <div>
      {buffering ? (
        <>
          <div>
            <Filters
              allCountries={allCountries}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
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
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                  navigate(`/home/${index + 1}`);
                }}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={() => next()}>{"\u00BB"}</button>
          </div>
        </>
      ) : (
        <div className={style.backgroundGif}>
          <img
            src={require("../../images/giff.gif")}
            alt="buffering"
            className={style.loading}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
