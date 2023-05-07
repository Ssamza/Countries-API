import style from "./home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCountries, getName } from "../../redux/action";
import Cards from "../../components/cards/cards";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <Cards allCountries={allCountries} />
    </div>
  );
}

export default Home;
