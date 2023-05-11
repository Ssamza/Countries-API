import style from "./landing.module.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  function exploreButton() {
    navigate("/home");
  }

  return (
    <div className={style.back}>
      <div className={style.color}>
        <div className={style.text}>
          <h1 className={style.title}>
            <span className={style.first}>C</span>apital
            <span className={style.first}>D</span>ata{" "}
            <span className={style.app}>app</span>
          </h1>
          <h3 className={style.parag}>
            <br />
            Discover in this app about 200+ countries, including population,
            area, capital city, and more. Immerse yourself as you view each
            country's flag and learn about its location.
            <br />
            <br />
            <br />
            Explore the hidden gems of the world and embark on an unforgettable
            journey to the unknown.
          </h3>
          <br />
          <br />
          <button className={style.button} onClick={exploreButton}>
            Start Now
          </button>
        </div>
        <img
          className={style.logo}
          src={require("../../images/henry.png")}
          alt=""
        />
      </div>
    </div>
  );
}

export default Landing;
