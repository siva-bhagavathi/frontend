import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [job, setJob] = useState("");

  useEffect(() => {
    Axios.get("https://localhost:7111/1").then((res) => {
      //console.log(res.data);
      setJob(res.data.job);
    });
  }, []);
  return (
    <div className="App">
      <p> Welcome to Alspec</p>
      <button>Get jobs</button>
      <p>{job}</p>
    </div>
  );
}

export default App;
