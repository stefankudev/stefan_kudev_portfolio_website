import css from "./UnderConstruction.module.css";
var cn = require("classnames");

export default function UnderConstruction() {
  return (
    <div className={cn(css.underConstructionContainer)}>
      <p className={cn(css.underConstructionText)}>🚧 Under Construction 🚧</p>
    </div>
  );
}
