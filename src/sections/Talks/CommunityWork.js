import Card from "../../components/Card/Card.js";
import MoreComingSoon from '../../components/MoreComingSoon/MoreComingSoon.js'

// CSS
import css from "./Talks.module.css";

var cn = require("classnames");

const Talks = [
    {
        title: "Should you work for a startup?",
        location: "💻 Remote | School of Code",
        date: "May 2021",
    },
    {
        title: "Getting started with Chocolatey for Windows",
        location: "Fusion ⚡ Lightning Talks",
        date: "11 March 2021",
    },
    {
        title: "Building Your First Chrome Extension",
        location: "Brum.js ⚡ Lightning Talks",
        date: "25 February 2021",
    },
];

const Teaching = [
    {
        title: "Introduction to Web Development - Community Class",
        location: "💻 Remote | TechBirmingham",
        date: "October 2020",
    },
];

export default function CommunityWork() {
    return (
        <Card title="Community Work & Tech Talks" titleSeperator>
            {Talks.map((talk) => (
                <Card>
                    <h4 className={cn(css.talkTitle)}>{talk.title}</h4>
                    <p className={cn(css.talkLocation)}>{talk.location}</p>
                    <date className={cn(css.talkDate)}>📅 {talk.date}</date>
                </Card>
            ))}
            {Teaching.map((talk) => (
                <Card>
                    <h4 className={cn(css.talkTitle)}>{talk.title}</h4>
                    <p className={cn(css.talkLocation)}>{talk.location}</p>
                    <date className={cn(css.talkDate)}>📅 {talk.date}</date>
                </Card>
            ))}
            <MoreComingSoon/>
        </Card>
    );
}
