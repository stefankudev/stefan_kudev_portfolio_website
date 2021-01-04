import "./App.css";

import TitleCard from "./components/TitleCard/TitleCard.js";
import BraggingRights from "./components/BraggingRights/BraggingRights.js";
import Card from "./components/Card/Card.js";
import ProjectCard from "./components/ProjectCard/ProjectCard.js";
import ContactButton from "./components/ContactButton/ContactButton.js";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard.js";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction.js";

function App() {
  return (
    <div className="container">
      <main>
        <TitleCard
          availability={true}
          preferredWork={[
            "Full Time Roles",
            "Part Time Roles",
            "Freelance Work",
          ]}
        />
        <BraggingRights codeWarsBadgeSize="large" />
        <Card title="Projects" titleSeperator>
          <ProjectCard
            title="Pow!Agile — Better remote agile ceremonies"
            description="In a team of 5, we built a robust platform for facilitating agile ceremonies remotely...
            And we did it in just 4 weeks."
            techStack={[
              "js",
              "react",
              "nodejs",
              "mongoDB",
              "auth0",
              "git",
              "github",
              "figma",
              "adobephotoshop",
              "trello",
              "Jira",
            ]}
          />
        </Card>

        <Card title="Testimonials" titleSeperator>
          <UnderConstruction />
        </Card>
        <Card title="Articles" titleSeperator>
          <UnderConstruction />
        </Card>
        <Card title="Hobbies & Interests" titleSeperator>
          <UnderConstruction />
        </Card>
      </main>
      {/* <ContactButton /> */}
    </div>

    // socials? probably not idk
    // personal projects
    // a little bit about me
  );
}

export default App;
