import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("ellie");

  useEffect(() => {
    console.log("useEffect");
  }, []);
  return <></>;
}

export default App;
