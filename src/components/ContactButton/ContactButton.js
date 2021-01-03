import css from "./ContactButton.module.css";
var cn = require("classnames");

export default function ContactButton() {
  return (
    <button
      className={cn(css.contactButton)}
      type="button"
      name="Contact Button"
      value="Contact Button"
    >
      💬
    </button>
  );
}
