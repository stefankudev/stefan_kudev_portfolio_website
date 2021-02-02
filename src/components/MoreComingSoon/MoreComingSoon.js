import css from "./MoreComingSoon.module.css";
var cn = require("classnames");

export default function MoreComingSoon({ moreWhat }) {
  return (
    <div className={cn(css.MoreComingSoonContainer)}>
      <p className={cn(css.MoreComingSoonText)}>More {moreWhat} coming soon!</p>
    </div>
  );
}
