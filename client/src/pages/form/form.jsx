import style from "./form.module.css";
import { useEffect, useState } from "react";
import { getCountries, clearCountries, addActivity } from "../../redux/action";
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
    }
    try {
      dispatch(addActivity(input));
      setInput({
        name: "",
        difficulty: 0,
        season: "",
        country: [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.all}>
      <h1>¡CREATE AN ACTIVITY!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name: </label>
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

        <div>
          <label>difficulty: </label>
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
          <label>season:</label>
          <br />
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
              onChange={handleChange}
            />
            Summer
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="season"
              value="autumn"
              onChange={handleChange}
            />
            Autumn
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="season"
              value="winter"
              onChange={handleChange}
            />
            Winter
          </label>
        </div>

        <div>
          <label>countries: </label>
          <select
            name="country"
            value={
              input.country.length > 0
                ? input.country[input.country.length - 1]
                : "default"
            }
            onChange={handleSelect}
            defaultValue="default"
          >
            <option value="default" disabled>
              Select a country
            </option>
            {countries?.map((c, index) => {
              return (
                <option key={index} value={c.name}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={style.container}>
          {input.country.map((c, index) => (
            <div className={style.selectedC} key={index}>
              <p>{c}</p>
              <button
                className={style.iconButton}
                onClick={handleDelete}
                value={c}
              >
                ⛔
              </button>
            </div>
          ))}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
