import style from "./form.module.css";
import { useEffect, useState } from "react";
import { getCountries, clearCountries } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
    return () => {
      dispatch(clearCountries());
    };
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    season: "",
    countries: [],
  });

  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  return (
    <div className={style.all}>
      <form action="">
        <h1>CREATE AN ACTIVITY!</h1>
        <input type="text" />
      </form>
      <button>Submit</button>
    </div>
  );
}

export default Form;
