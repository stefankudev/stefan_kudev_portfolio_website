// React
import { useState } from "react";

// Sections
import TitleCard from "./sections/TitleCard/TitleCard.js";
import VibeCheck from "./sections/VibeCheck/VibeCheck.js";
import Testimonials from "./sections/Testimonials/Testimonials.js";
import Projects from "./sections/Projects/Projects.js";
import Talks from "./sections/Talks/Talks.js";
import Hobbies from "./sections/Hobbies/Hobbies.js";
import ContactDetails from "./sections/ContactDetails/ContactDetails.js";

// Components
import ContactButton from "./components/ContactButton/ContactButton.js";

// CSS
import css from "./App.module.css";
var cn = require("classnames");

function App() {
  const [contactActive, set] = useState(false);

  function toggleContactDetails() {
    set(!contactActive);
  }

  return (
    <>
      {contactActive ? <ContactDetails /> : null}

      <main className={contactActive ? cn(css.blur) : null}>
        <TitleCard
          availability={false}
          tagline="Full Stach Dev at Kingsbridge"
        // preferredWork={[
        //   "Full Stack Developer Roles",
        //   "Front End Developer Roles",
        //   "Freelance/Contract Work",
        // ]}
        />
        <VibeCheck codeWarsBadgeSize="large" />
        <Projects />
        <Talks />
        <Testimonials />
        <Hobbies />
        <section className={cn(css.pageEnd)}>
          You've reached the end!
          <br />
          But did you try pressing that blue button?
        </section>
      </main>
      <ContactButton toggleContactDetails={toggleContactDetails} />
    </>
  );
}

export default App;
