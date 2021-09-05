import Card from "../../components/Card/Card.js";
import MoreComingSoon from '../../components/MoreComingSoon/MoreComingSoon.js'

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
    title: "Getting started with Chocolatey for Windows",
    location: "Fusion ⚡ Lightning Talks",
    date: "11 March 2021",
  },
];

export default function Talks() {
  return (
    <Card title="Tech Talks" titleSeperator>
      {MyTechTalks.map((talk) => (
        <Card>
          <h4 className={cn(css.talkTitle)}>{talk.title}</h4>
          <p className={cn(css.talkLocation)}>{talk.location}</p>
          <date className={cn(css.talkDate)}>📅 {talk.date}</date>
        </Card>
      ))}
      <MoreComingSoon moreWhat="talks" />
    </Card>
  );
}
