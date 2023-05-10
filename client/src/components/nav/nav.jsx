import style from "./nav.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../redux/action";

function Nav() {
  const dispatch = useDispatch();

  const [searchCountry, setSearchCountry] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchCountry(event.target.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getName(searchCountry));
  }

  return (
    <div>
      <div className={style.searchContainer}>
        <input
          className={style.input}
          type="search"
          placeholder="Search Country"
          onChange={handleChange}
        />
        <button type="submit" className={style.button} onClick={handleSubmit}>
          <i class="fas fa-search icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Nav;
