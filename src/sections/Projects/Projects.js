// Components
import Card from "../../components/Card/Card";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

// Project Images
import PowAgileVideo from "./projectImages/powagile/powagile.webm";
import PowAgileThumb from "./projectImages/powagile/powagile.jpg";
import IternalThumb from "./projectImages/iternal/iternal.jpg";

export default function Projects() {
  return (
    <Card title="Projects" titleSeperator>
      <ProjectCard
        thumbnail={PowAgileThumb}
        video={PowAgileVideo}
        title="Pow!Agile — Better remote agile ceremonies"
        description="In a team of 5, we built a robust platform for facilitating agile ceremonies remotely...
      And we did it in just 4 weeks."
        techStack={[
          "react",
          "nodejs",
          "mongoDB",
          "auth0",
          "git",
          "github",
          "figma",
          "Jira",
        ]}
        links={[
          {
            url: "https://powagile.netlify.app/",
            linkTitle: "See it live",
          },
          {
            url: "https://github.com/stefankudev/powagile_front_end",
            linkTitle: "GitHub - Front End",
          },
          {
            url: "https://github.com/stefankudev/powagile_back_end",
            linkTitle: "GitHub - Back End",
          },
        ]}
      />
      <ProjectCard
        thumbnail={IternalThumb}
        title="Iternal - Be Remembered"
        description="Iternal is a platform dedicated to preserving your legacy, helping you upload your most cherished memories and share them with friends and family."
        techStack={[
          "react",
          "nodejs",
          "mongoDB",
          "heroku",
          "git",
          "github",
          "figma",
          "adobephotoshop",
          "adobeillustrator",
          "trello",
        ]}
        links={[
          {
            url: "https://iternal.app/sign-up",
            linkTitle: "Sign up",
          },
        ]}
      />
    </Card>
  );
}
