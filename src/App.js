import "./App.css";

import TitleCard from "./components/TitleCard/TitleCard.js";
import BraggingRights from "./components/BraggingRights/BraggingRights.js";
import Card from "./components/Card/Card.js";
import ProjectCard from "./components/ProjectCard/ProjectCard.js";
import ContactButton from "./components/ContactButton/ContactButton.js";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard.js";

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
          <TestimonialCard />
        </Card>
        <Card title="Articles" titleSeperator>
          <Card>
            <p style={{ textAlign: "center" }}>🚧 Under construction... 😅🚧</p>
            <br />
            <p>Ask me about:</p>
            <ul>
              <li>My UI/UX design work for Virgin Money</li>
              <li>
                Overhauling a customer support process, which helped Usborne
                Foundation save thousands per year
              </li>
              <li>
                Using code as copywriting in a marketing campaign for Packt
                Publishing
              </li>
              <li>
                Redesigning an onboarding journey which reduced churn for
                Packt's subscription service
              </li>
            </ul>
          </Card>
        </Card>
        <Card title="Hobbies & Interests" titleSeperator></Card>
      </main>
      <ContactButton />
    </div>
    // main bit

    // freelance status: AVAILABLE / NOT AVAILABLE

    // socials? probably not idk

    // personal projects

    // dev.to articles?

    // a little bit about me
  );
}

export default App;
