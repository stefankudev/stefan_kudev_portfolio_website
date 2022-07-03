// CSS
import css from "./ContactDetails.module.css";

// Logos
import GmailLogo from "./logos/gmail.svg";
import TelegramLogo from "./logos/telegram.svg";
import MessengerLogo from "./logos/messenger.svg";
import LinkedInLogo from "./logos/linkedin.svg";


var cn = require("classnames");

export default function ContactDetails() {
    return (
        <>
            <section className={css.contactText}>
                If you made it all the way
                <br/>
                down here, let's chat.
            </section>
            <section className={cn(css.contactButtonContainer)}>
                <a href="mailto:stefan.yanchev.kudev+website@gmail.com?subject=Reaching out to you from stefan-ku.dev">
                    <img
                        className={cn(css.contactButtonLogo)}
                        src={GmailLogo}
                        alt={""}
                    />&nbsp;Email
                </a>
                <a href="https://t.me/stefan_kudev" target="_blank" rel="noreferrer">
                    <img
                        className={cn(css.contactButtonLogo)}
                        src={TelegramLogo}
                        alt={""}
                    />&nbsp;Telegram
                </a>
                <a
                    href="https://m.me/Stefan.Yanchev.Kudev"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className={cn(css.contactButtonLogo)}
                        src={MessengerLogo}
                        alt={""}
                    />&nbsp;Messenger
                </a>
                <a
                    href="https://www.linkedin.com/in/stefankudev/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className={cn(css.contactButtonLogo)}
                        src={LinkedInLogo}
                        alt={""}
                    />&nbsp;LinkedIn
                </a>
            </section>
            <div className={css.rainbowBackground}></div>
        </>
    );
}
