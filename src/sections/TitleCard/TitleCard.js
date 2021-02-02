import ProfilePicture from "./Stefan_Kudev.jpg";
import css from "./TitleCard.module.css";
var cn = require("classnames");

export default function TitleCard({
  availability = true,
  preferredWork = ["Full Time Roles", "Part Time Roles", "Freelance Work"],
}) {
  return (
    <div className={cn(css.special, css.card)}>
      <img
        id={cn(css.profilePicture)}
        src={ProfilePicture}
        alt="A photograph of Stefan Kudev"
      />
      <h1>
        Stefan Ku<em>dev</em>
      </h1>
      <h2>It's in the name</h2>
      <hr className={cn(css.fancyHr)} />
      <div className={cn(css.titleCardParagraphs)}>
        <p>
          I'm currently{" "}
          <span>
            {availability ? (
              <span>
                <span id={cn(css.available)}>✅ available</span> for:
              </span>
            ) : (
              <span>
                <span id={cn(css.unavailable)}>❌ unavailable</span> for dev
                work!
                <br />
                <br />
                Hit the 💬 button if you'd like to discuss my availability.
              </span>
            )}
          </span>
        </p>
        {availability && preferredWork ? (
          <ul>
            {preferredWork.map((workItem) => (
              <li>{workItem}</li>
            ))}
          </ul>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
