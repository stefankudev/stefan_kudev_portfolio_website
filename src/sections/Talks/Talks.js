import Card from "../../components/Card/Card.js";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction.js";

// CSS
import css from "./Talks.module.css";
var cn = require("classnames");

const MyTechTalks = [
  {
    title: "Building Your First Chrome Extension",
    location: "Brum.js ⚡ Lightning Talks",
    date: "25 February 2021",
  },
  {
    title: "TBC",
    location: "Fusion ⚡ Lightning Talks",
    date: "March 2021",
  },
];

export default function Talks() {
  return (
    <Card title="Tech Talks" titleSeperator>
      <UnderConstruction />
      {MyTechTalks.map((talk) => (
        <Card>
          <h4 className={cn(css.talkTitle)}>{talk.title}</h4>
          <p className={cn(css.talkLocation)}>{talk.location}</p>
          <date className={cn(css.talkDate)}>📅 {talk.date}</date>
        </Card>
      ))}
    </Card>
  );
}
