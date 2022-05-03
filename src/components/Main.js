const Main = ({
  data,
  arrayPanier,
  setArrayPanier,
  pricePanier,
  setPricePanier,
}) => {
  const handleClickDiv = (index, subItem) => {
    {
      const newArrayPanier = [...arrayPanier];
      if (
        newArrayPanier.filter((elmt) => elmt.itemPanier === subItem).length < 1
      ) {
        newArrayPanier.push({
          counter: 1,
          itemPanier: subItem,
        });
        setArrayPanier(newArrayPanier);

        const newArrayPrice = [...pricePanier];
        newArrayPrice.push(subItem.price);
        setPricePanier(newArrayPrice);
      } else {
        const newArrayCounter = [...arrayPanier];
        console.log(newArrayCounter[index]);
        newArrayCounter[index].counter += 1;
        setArrayPanier(newArrayCounter);
      }
    }
  };

  return (
    <div className="categories">
      {data.categories.map((item, index) => {
        return (
          <div className="container-categories" key={index}>
            <h2>{item.name}</h2>

            <div className="catagories-item">
              {item.meals.map((subItem, index) => {
                return (
                  <div
                    className="subItem"
                    key={subItem.id}
                    onClick={() => handleClickDiv(index, subItem)}>
                    <div className="text-item">
                      <div>
                        <h3> {subItem.title} </h3>
                      </div>
                      <div>
                        <p>{subItem.description}</p>
                      </div>
                      <div className="price">
                        <p>{subItem.price.replace(".", ",")} €</p>
                        {subItem.popular === true ? (
                          <p id="populaire">★ Populaire</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="subItemImg">
                      {subItem.picture ? (
                        <img src={subItem.picture} alt="" />
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Main;
