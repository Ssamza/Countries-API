import style from "./filters.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getActivities,
  byAbc,
  byNumber,
  byContinent,
  byAct,
} from "../../redux/action";

function Filters({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ABC, setABC] = useState("");
  const [pop, setPop] = useState("");

  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  function handlePage() {
    setCurrentPage(1);
    navigate(`/home/1`);
  }

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
          onChange={(event) => {
            handlerByABC(event);
            handlePage();
          }}
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
          onChange={(event) => {
            handlerByPop(event);
            handlePage();
          }}
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
          onChange={(event) => {
            handlerByCont(event);
            handlePage();
          }}
          defaultValue="cont"
        >
          <option value="cont" disabled>
            Continent
          </option>
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
          onChange={(event) => {
            handlerByAct(event);
            handlePage();
          }}
          defaultValue="default"
        >
          <option value="default" disabled>
            Activities
          </option>
          {activities &&
            activities?.map((activity, index) => {
              return (
                <option key={index} value={activity.name}>
                  {activity.name}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default Filters;
