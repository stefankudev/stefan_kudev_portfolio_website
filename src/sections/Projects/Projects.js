// Components
import Card from "../../components/Card/Card";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import MoreComingSoon from "../../components/MoreComingSoon/MoreComingSoon.js";

// Project Images
import PowAgileVideo from "./projectImages/powagile/powagile.webm";
import PowAgileThumb from "./projectImages/powagile/powagile.jpg";

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
      <MoreComingSoon moreWhat="projects" />
    </Card>
  );
}
