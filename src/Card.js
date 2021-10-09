import "./App.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}></div>;
};

export default Card;
