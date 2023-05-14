import style from "./filters.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getActivities,
  byAbc,
  byNumber,
  byContinent,
  byAct,
} from "../../redux/action";

function Filters() {
  const dispatch = useDispatch();

  const [ABC, setABC] = useState("");
  const [pop, setPop] = useState("");

  // useEffect(() => {
  //   dispatch(getActivities())
  //   });
  // }, []);

  function handlerByABC(event) {
    dispatch(byAbc(event.target.value));
    setABC(event.target.value);
  }

  function handlerByPop(event) {
    dispatch(byNumber(event.target.value));
    setPop(event.target.value);
  }

  function handlerByCont(event) {
    dispatch(byContinent(event.target.value));
  }

  function handlerByAct(event) {
    dispatch(byAct(event.target.value));
  }

  return (
    <div>
      <div className={style.all}>
        <div className={style.sort}>Sort By</div>
        <select
          className={style.abc}
          name="byAbc"
          onChange={handlerByABC}
          defaultValue="select"
        >
          <option value="select" disabled>
            Country
          </option>
          <option value="top">A-z</option>
          <option value="bottom">Z-a</option>
        </select>

        <select
          className={style.pop}
          name="byPop"
          onChange={handlerByPop}
          defaultValue="select"
        >
          <option value="select" disabled>
            Population
          </option>
          <option value="Greater">Greater</option>
          <option value="Lesser">Lesser</option>
        </select>

        <select
          className={style.cont}
          name="byCont"
          onChange={handlerByCont}
          defaultValue="all"
        >
          <option value="all">All</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </div>
      <div className={style.actC}>
        <select
          className={style.act}
          name="byAct"
          onChange={handlerByAct}
          defaultValue="act"
        >
          <option value="act" disabled>
            Activities
          </option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
