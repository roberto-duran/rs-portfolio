import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import {PageInfo} from "../models/pageInfo";
import {Experience} from "../models/experience";
import {Skill} from "../models/skill";
import {Project} from "../models/project";
import {fetchPageInfo} from "../utils/fetchPageInfo";
import {fetchExperiences} from "../utils/fetchExperiences";
import {fetchSkills} from "../utils/fetchSkills";
import {fetchProjects} from "../utils/fetchProjects";

const HomePage  = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();

    return (
        <div>
            <section id="presentation" className="snap-center">
                <Hero pageInfo={pageInfo}/>
            </section>

            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>

            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </section>

            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>

            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>

            <section id="contact" className="snap-center">
                <ContactMe/>
            </section>
        </div>
    );
};

export default HomePage;
