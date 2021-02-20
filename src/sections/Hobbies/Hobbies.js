// Components
import Card from "../../components/Card/Card";

// CSS
import css from "./Hobbies.module.css";
var cn = require("classnames");

const MyHobbies = [
  {
    name: "📷 Enthusiast landscape, portrait, night photographer",
    content: [
      <>
        3,000,000+ views on{" "}
        <a
          href="https://www.google.com/maps/contrib/112786140174644839336/photos/@52.4685569,-1.9743938,12z/data=!3m1!4b1!4m3!8m2!3m1!1e1"
          target="_blank"
          rel="noreferrer"
        >
          Google Maps
        </a>
      </>,
      <>I love everything Photoshop</>,
      <>Recently taught a Photoshop community class</>,
      <>
        Have a look at my{" "}
        <a
          href="https://www.instagram.com/stefan_kudev/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>{" "}
        and{" "}
        <a
          href="https://500px.com/p/stefan_kudev"
          target="_blank"
          rel="noreferrer"
        >
          500px
        </a>
      </>,
    ],
  },
  {
    name: "🎮 Gaming",
    content: [
      <>Currently into platformers</>,
      <>Just completed: New Super Mario Brothers U</>,
      <>Now Playing: Crash Bandicoot 4</>,
    ],
  },
  {
    name: "👟 Fitness",
    content: [
      <>Lost nearly 4.5 stone on my first ever 1-year fitness journey</>,
      <>(pls don’t ask me how much I’ve gained in these lockdowns, lol)</>,
    ],
  },
  // {
  //   name: "🧩 Other Fun Stuff",
  //   content: [
  //     <>
  //       I made a rap about the fetch() API with some of my friends from School
  //       of Code
  //     </>,
  //     <a
  //       href="https://soundcloud.com/stefankudev/its-fetch"
  //       target="_blank"
  //       rel="noreferrer"
  //     >
  //       Listen to it here!
  //     </a>,
  //   ],
  // },
];

export default function Hobbies() {
  return (
    <Card title="Hobbies & Interests" titleSeperator>
      {MyHobbies.map((hobby) => (
        <Card>
          <h4 className={cn(css.hobbyTitle)}>{hobby.name}</h4>
          <ul className={cn(css.hobbyList)}>
            {hobby.content ? hobby.content.map((el) => <li>{el}</li>) : null}
          </ul>
        </Card>
      ))}
    </Card>
  );
}
