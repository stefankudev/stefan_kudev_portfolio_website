// Sections
import TitleCard from "./sections/TitleCard/TitleCard.js";
import SkillsCheck from "./sections/VibeCheck/SkillsCheck.js";
import Testimonials from "./sections/Testimonials/Testimonials.js";
import Projects from "./sections/Projects/Projects.js";
import CommunityWork from "./sections/Talks/CommunityWork.js";
import Hobbies from "./sections/Hobbies/Hobbies.js";
import ContactDetails from "./sections/ContactDetails/ContactDetails.js";

// CSS
import css from "./App.module.css";

const cn = require("classnames");

function App() {
    return (
        <main>
            <TitleCard
                tagline="Full Stack Web Developer"
                showAvailability={true}
                preferredWork={[
                    "Full Stack Web Developer Roles",
                    "Front End Web Developer Roles",
                    "Part Time Contracts",
                    "Full Time Contracts",
                ]}
            />
            <SkillsCheck codeWarsBadgeSize="large"/>
            <Projects/>
            <CommunityWork/>
            <Testimonials/>
            <Hobbies/>
            <footer className={cn(css.footer)}>
                <ContactDetails/>
            </footer>
        </main>
    );
}

export default App;
