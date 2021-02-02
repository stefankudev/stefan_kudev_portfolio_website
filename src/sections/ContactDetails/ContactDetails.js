// CSS
import css from "./ContactDetails.module.css";
var cn = require("classnames");

export default function ContactDetails() {
  return (
    <>
      <section className={cn(css.contactDetailsCard)}>
        <h3>Contact me</h3>
        <hr className={cn(css.fancyHr)}></hr>
        <div className={cn(css.cringeSalesMessage)}>
          <p>
            # "Hello World" unlocks many possibilities
            <br /># Saying "hello" to me unlocks even more
          </p>
        </div>
        <section className={cn(css.contactButtons)}>
          <a href="https://t.me/stefan_kudev" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a
            href="https://m.me/Stefan.Yanchev.Kudev"
            target="_blank"
            rel="noreferrer"
          >
            Messenger
          </a>
          <a
            href="https://www.linkedin.com/in/stefankudev/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </section>
      </section>
      <div className={cn(css.rainbowBackground)}></div>
    </>
  );
}
