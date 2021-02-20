// Tech Stack
import Html5Logo from "./logos/html-5.svg";
import CSS3Logo from "./logos/css-3.svg";
import JavaScriptLogo from "./logos/javascript.svg";
import ReactLogo from "./logos/react.svg";
import NodeJSLogo from "./logos/nodejs-icon.svg";
import ExpressJSLogo from "./logos/express.svg";
import PostgresLogo from "./logos/postgresql.svg";
import MongoDBLogo from "./logos/mongodb-icon.svg";
import HerokuLogo from "./logos/heroku-icon.svg";
import JestLogo from "./logos/jest.svg";
import MochaLogo from "./logos/mocha.svg";
import AWS_EC2Logo from "./logos/aws-ec2.svg";
import AWS_S3Logo from "./logos/aws-s3.svg";
import AWS_DynamoDbLogo from "./logos/aws-dynamodb.svg";
import AWS_APIGatewayLogo from "./logos/aws-api-gateway.svg";
import AWS_LambdaLogo from "./logos/aws-lambda.svg";
import Auth0Logo from "./logos/auth0.svg";
import FirebaseLogo from "./logos/firebase.svg";
import NetlifyLogo from "./logos/netlify.svg";
import GitLogo from "./logos/git-icon.svg";
import GitHubLogo from "./logos/github-icon.svg";
import FigmaLogo from "./logos/figma.svg";
import AdobePhotoshopLogo from "./logos/adobe-photoshop.svg";
import AdobeIllustratorLogo from "./logos/adobe-illustrator.svg";
import TrelloLogo from "./logos/trello.svg";
import JiraLogo from "./logos/jira.svg";
import GolangLogo from "./logos/gopher.svg";
import PythonLogo from "./logos/python.svg";

// Placeholder Thumbnail
import placeholderThumbnail from "./placeholder_thumbnail.png";

import css from "./ProjectCard.module.css";
var cn = require("classnames");

export default function ProjectCard({
  title = "Sample Project",
  description = "Short project description, briefly describing the problem, the justification for the chosen tech stack, and the result. The better this is explained, the clearer the employer/client can perceive the ROI.",
  video = false,
  thumbnail = placeholderThumbnail,
  techStack = [
    "html",
    "css",
    "js",
    "react",
    "nodejs",
    "express",
    "postgres",
    "mongoDB",
    "heroku",
    "jest",
    "mocha",
    "aws_ec2",
    "aws_s3",
    "aws_dynamodb",
    "aws_apigateway",
    "aws_lambda",
    "auth0",
    "firebase",
    "netlify",
    "git",
    "github",
    "figma",
    "adobephotoshop",
    "adobeillustrator",
    "trello",
    "Jira",
    "golang",
    "python",
  ],
  links = [{ url: "#", linkTitle: "Sample link" }],
}) {
  const techStackLogos = {
    html: Html5Logo,
    css: CSS3Logo,
    js: JavaScriptLogo,
    react: ReactLogo,
    nodejs: NodeJSLogo,
    express: ExpressJSLogo,
    postgres: PostgresLogo,
    mongoDB: MongoDBLogo,
    heroku: HerokuLogo,
    jest: JestLogo,
    mocha: MochaLogo,
    aws_ec2: AWS_EC2Logo,
    aws_s3: AWS_S3Logo,
    aws_dynamodb: AWS_DynamoDbLogo,
    aws_apigateway: AWS_APIGatewayLogo,
    aws_lambda: AWS_LambdaLogo,
    auth0: Auth0Logo,
    firebase: FirebaseLogo,
    netlify: NetlifyLogo,
    git: GitLogo,
    github: GitHubLogo,
    figma: FigmaLogo,
    adobephotoshop: AdobePhotoshopLogo,
    adobeillustrator: AdobeIllustratorLogo,
    trello: TrelloLogo,
    Jira: JiraLogo,
    golang: GolangLogo,
    python: PythonLogo,
  };
  return (
    <article className={cn(css.card)}>
      {video ? (
        <a
          className={cn(css.projectThumbnailLink)}
          href={links[0].url}
          target="_blank"
          rel="noreferrer"
        >
          <video
            className={cn(css.projectThumbnail)}
            autoPlay
            muted
            loop
            src={video}
            type="video/webm"
            poster={thumbnail}
          />
        </a>
      ) : (
        <img
          className={cn(css.projectThumbnail)}
          alt={"Showcase image for " + title + " project"}
          src={thumbnail}
        ></img>
      )}
      <div className={cn(css.descriptionArea)}>
        <h4>{title}</h4>
        <p>{description}</p>
        {techStack.map((techName) =>
          techName in techStackLogos ? (
            <img
              className={cn(css.techStackLogo)}
              src={techStackLogos[techName]}
              alt={techName}
            />
          ) : null
        )}
        <div className={cn(css.linksArea)}>
          {links.map((el) => (
            <a href={el.url} target="_blank" rel="noreferrer">
              {el.linkTitle} &rarr;
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
