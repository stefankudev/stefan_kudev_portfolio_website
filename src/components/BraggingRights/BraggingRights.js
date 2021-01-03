import { useState } from "react";
import css from "./BraggingRights.module.css";
import pluralSightIQ from "./pluralsight_iq_js_core_language_259.png";
import Card from "../Card/Card";
var cn = require("classnames");

export default function BraggingRights({ codeWarsBadgeSize = "large" }) {
  const [codewarsScore] = useState(372);
  const [IQ] = useState(259);

  return (
    <Card>
      <h3>
        Vibe check <span id={cn(css.vibeCheckEmoji)}>👇</span>
      </h3>
      <hr className={cn(css.fancyHr)} />
      <Card style={{ opacity: "25%" }}>
        <div className={cn(css.imageWrapper)}>
          <img
            id={css.codewarsImgEmbed}
            src={
              "https://www.codewars.com/users/stefan_kudev/badges/" +
              codeWarsBadgeSize
            }
            alt={"Stefan Kudev's score on Codewars - " + codewarsScore}
          />
          <img
            id={css.psIQimageEmbed}
            src={pluralSightIQ}
            alt={
              "}Stefan Kudev's JavaScript Core Language PluralSight IQ - " + IQ
            }
          />
        </div>
      </Card>
    </Card>
  );
}
