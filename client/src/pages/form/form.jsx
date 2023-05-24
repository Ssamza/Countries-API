import style from "./form.module.css";
import { useEffect, useState } from "react";
import {
  getCountries,
  getActivities,
  clearCountries,
  addActivity,
} from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
    // return () => {
    //   dispatch(clearCountries());
    // };
  }, []);

  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    season: "",
    country: [],
  });

  function handleChange(event) {
    console.log("event", input);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  function handleSelect(event) {
    const selectedCountry = event.target.value;
    if (input.country.includes(event.target.value)) {
      window.alert("Country already selected");
    } else if (input.country.length === 8) {
      window.alert("Max. 8 countries");
    } else {
      setInput({
        ...input,
        country: [...input.country, selectedCountry],
      });
    }
  }

  function handleDelete(event) {
    const countryDelete = event.target.value;
    setInput({
      ...input,
      country: input.country.filter((c) => c !== countryDelete),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input.country.length < 1) {
      alert("Please select at least one country");
      return;
    } else if (input.name.length === 0) {
      alert("Please enter a name");
    } else if (input.season.length === 0) {
      alert("Select a season");
    } else if (
      activities.length > 0 &&
      activities.some((activity) => activity.name === input.name)
    ) {
      alert("Activity already exists!");
    } else {
      try {
        dispatch(addActivity(input));
        setInput({
          name: "",
          difficulty: 0,
          season: "",
          country: [],
        });
        alert("Activity created");
      } catch (error) {
        console.log(error);
      }
    }
  }

  function backButton() {
    navigate("/home");
  }

  return (
    <div className={style.back}>
      <span className={style.create}>...creating</span>
      <div className={style.buttonC}>
        <button className={style.button} onClick={backButton}>
          Back
        </button>
      </div>

      <div className={style.all}>
        <form onSubmit={handleSubmit}>
          <div className={style.name}>
            <div>
              <label>Name</label>
            </div>
            <input
              type="text"
              name="name"
              minLength="3"
              maxLength="20"
              value={input.name}
              placeholder=""
              onChange={handleChange}
            />
          </div>

          <div className={style.diff}>
            <div>
              <label>Difficulty </label>
            </div>
            <input
              type="number"
              min="1"
              max="5"
              name="difficulty"
              value={input.difficulty}
              placeholder=""
              onChange={handleChange}
            />
          </div>

          <div>
            <label className={style.seasonText}>Season</label>
            <div className={style.season}>
              <label>
                <input
                  type="radio"
                  name="season"
                  value="spring"
                  onClick={handleChange}
                  required
                />
                Spring
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="season"
                  value="summer"
                  onClick={handleChange}
                />
                Summer
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="season"
                  value="autumn"
                  onClick={handleChange}
                />
                Autumn
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="season"
                  value="winter"
                  onClick={handleChange}
                />
                Winter
              </label>
            </div>
          </div>

          <div>
            <select
              className={style.countries}
              name="country"
              value={
                input.country.length > 0
                  ? input.country[input.country.length - 1]
                  : "default"
              }
              onChange={handleSelect}
              defaultValue="default"
            >
              <option className={style.cont} value="default" disabled>
                Select a country
              </option>
              {countries?.map((c, index) => {
                return (
                  <option
                    className={style.countriesOp}
                    key={index}
                    value={c.name}
                  >
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={style.country}>
            {input.country.map((c, index) => (
              <div className={style.selectedC} key={index}>
                <p>{c}</p>
                <button
                  className={style.iconButton}
                  onClick={handleDelete}
                  value={c}
                  title={`eliminate`}
                >
                  ⛔
                </button>
              </div>
            ))}
          </div>
          <button className={style.submit} type="submit">
            Submit Activity
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
