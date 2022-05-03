import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const Panier = ({
  arrayPanier,
  setArrayPanier,
  pricePanier,
  setPricePanier,
  finalPrice,
  setFinalPrice,
}) => {
  const handlePricePanier = (index, itemPrice, itemCounter) => {
    const newArrayPrice = [...pricePanier];

    newArrayPrice[index] = itemPrice * itemCounter;

    const result = newArrayPrice[index].toFixed(2);
    newArrayPrice.splice(index, 1, result);

    setPricePanier(newArrayPrice);
  };

  useEffect(() => {
    if (pricePanier) {
      let priceBasket = 0;
      for (let i = 0; i < pricePanier.length; i++) {
        priceBasket = (Number(priceBasket) + Number(pricePanier[i])).toFixed(2);
      }
      setFinalPrice(priceBasket);
    }
  }, [pricePanier]);

  return (
    <div className="panier">
      <button
        className={arrayPanier.length > 0 ? "enabled" : "disabled"}
        disabled={arrayPanier.length > 0 ? false : true}>
        Valider mon panier
      </button>
      {arrayPanier.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <div>
          {arrayPanier.map((item, index) => {
            return (
              <div className="div-panier" key={item.itemPanier.id}>
                <div className="counter">
                  <FontAwesomeIcon
                    icon={"circle-minus"}
                    onClick={() => {
                      const newArrayCounter = [...arrayPanier];

                      if (newArrayCounter[index].counter > 1) {
                        newArrayCounter[index].counter -= 1;

                        handlePricePanier(
                          index,
                          item.itemPanier.price,
                          item.counter
                        );
                      } else {
                        newArrayCounter.splice(index, 1);
                      }
                      setArrayPanier(newArrayCounter);
                    }}
                  />

                  <p>{item.counter}</p>
                  <FontAwesomeIcon
                    icon={"circle-plus"}
                    onClick={() => {
                      const newArrayCounter = [...arrayPanier];
                      newArrayCounter[index].counter += 1;
                      setArrayPanier(newArrayCounter);

                      handlePricePanier(
                        index,
                        item.itemPanier.price,
                        item.counter
                      );
                    }}
                  />
                </div>
                <div className="panier-title">
                  <p> {item.itemPanier.title} </p>
                </div>
                <div className="panier-price">
                  <p>{pricePanier[index].replace(".", ",")}</p>
                </div>
              </div>
            );
          })}
          <div className="sous-total">
            <div className="total-item">
              <p>Sous-Total</p>
              <p>{finalPrice}</p>
            </div>
            <div className="total-item">
              <p>Frais de livraison</p>
              <p>2,50 €</p>
            </div>
            <div className="total-item">
              <h4>Total</h4>
              <span>{Number(finalPrice) + 2.5} €</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Panier;
