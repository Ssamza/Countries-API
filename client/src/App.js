import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Home from "./pages/home/home";
import Detail from "./pages/detail/detail";
import Form from "./pages/form/form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
