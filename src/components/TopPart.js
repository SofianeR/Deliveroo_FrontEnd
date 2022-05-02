const TopPart = (props) => {
  return (
    <div className="top">
      <div className="text-top">
        <h1>{props.data.restaurant.name}</h1>
        <p>{props.data.restaurant.description}</p>
      </div>
      <img src={props.data.restaurant.picture} alt="" />
    </div>
  );
};
export default TopPart;
