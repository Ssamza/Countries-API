import "./Error.css";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();

  const backButton = () => {
    navigate("/home");
  };

  return (
    <div className="Back">
      <div className="Text">
        <h1>404 - The page you are looking for cannot be found.</h1>
        <p>
          Please check the URL or try searching for the page using the search
          bar.
          <br />
          If you believe this is an error, please contact the website
          administrator.
        </p>
        <p>You can go back to the home page.</p>
      </div>
      <div className="buttonC">
        <button className="button" onClick={backButton}>
          Home
        </button>
      </div>
    </div>
  );
}

export default Error404;
