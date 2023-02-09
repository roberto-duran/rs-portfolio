import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import {fetchPageInfo} from "../utils/fetchPageInfo";
import {fetchExperiences} from "../utils/fetchExperiences";
import {fetchSkills} from "../utils/fetchSkills";
import {fetchProjects} from "../utils/fetchProjects";

const HomePage  = async () => {
    const [pageInfo, experiences, skills, projects] =
        await Promise.all([
        fetchPageInfo(),
        fetchExperiences(),
        fetchSkills(),
        fetchProjects()]);

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
