const Main = (props) => {
  return (
    <div className="categories">
      {props.data.categories.map((item, index) => {
        console.log(item.name);

        return (
          <div className="container-categories">
            <h2>{item.name}</h2>

            <div className="catagories-item">
              {item.meals.map((subItem, index) => {
                return (
                  <div className="subItem">
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
                          <p id="populaire">Populaire</p>
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
