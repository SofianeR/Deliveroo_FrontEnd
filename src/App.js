import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import TopPart from "./components/TopPart";
import Main from "./components/Main";
import Panier from "./components/Panier";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faCircleMinus, faCirclePlus);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [arrayPanier, setArrayPanier] = useState([]);
  const [pricePanier, setPricePanier] = useState([]);
  const [finalPrice, setFinalPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://deliveroo-r.herokuapp.com/");
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
            <Main
              data={data}
              arrayPanier={arrayPanier}
              setArrayPanier={setArrayPanier}
              pricePanier={pricePanier}
              setPricePanier={setPricePanier}
            />
            <Panier
              arrayPanier={arrayPanier}
              setArrayPanier={setArrayPanier}
              pricePanier={pricePanier}
              setPricePanier={setPricePanier}
              finalPrice={finalPrice}
              setFinalPrice={setFinalPrice}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
