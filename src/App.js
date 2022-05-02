import "./App.css";
import Header from "./components/Header";
import axios from "axios";

import { useState, useEffect } from "react";
import TopPart from "./components/TopPart";
import Main from "./components/Main";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://deliveroo-r.herokuapp.com/");
      console.log(response.data);
      setData(response.data);
      setIsLoading(true);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      {isLoading === false ? (
        <p>En cours de chargement </p>
      ) : (
        <div className="container">
          <TopPart data={data} />
          <div id="main">
            <Main data={data} />
            <div className="panier">
              <button disabled={true}>Valider mon panier</button>
              <p>Votre panier est vide</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
