import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [job, setJob] = useState("");

  const fetchJobs = () => {
    Axios.get("https://localhost:7111/1").then((res) => {
      setJob(res.data.job);
    });
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="App">
      <p> Welcome to Alspec</p>
      <button onClick={fetchJobs}>Get jobs</button>
      <p>{job}</p>
    </div>
  );
}

export default App;
