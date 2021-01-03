import css from "./Card.module.css";
var cn = require("classnames");

export default function Card({ title, titleSeperator, children }) {
  return (
    <div className={cn(css.card)}>
      {title ? <h3>{title}</h3> : null}
      {titleSeperator ? <hr className={cn(css.fancyHr)} /> : null}
      {children}
    </div>
  );
}
