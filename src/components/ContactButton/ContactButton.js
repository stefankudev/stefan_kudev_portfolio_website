import css from "./ContactButton.module.css";
var cn = require("classnames");

export default function ContactButton({ toggleContactDetails }) {
  return (
    <button
      onClick={toggleContactDetails}
      className={cn(css.contactButton)}
      type="button"
      name="Contact Button"
      value="Contact Button"
    >
      💬
    </button>
  );
}
