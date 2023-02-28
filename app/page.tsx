import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import {getPageInfo} from '../lib/getPageInfo'
import {getExperience} from '../lib/getExperience'
import {getSkills} from '../lib/getSkills'
import {getProjects} from '../lib/getProjects'


const HomePage  = async () => {
    const [pageInfo, experiences, skills, projects] =
        await Promise.all([
            getPageInfo(),
            getExperience(),
            getSkills(),
            getProjects()
        ]);

    return (
        <div>
            <section id="presentation" className="snap-center">
                <Hero pageInfo={pageInfo}/>
            </section>

            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>

            <section id="experience" className="snap-center">
                {/*@ts-ignore*/}
                <WorkExperience experiences={experiences} />
            </section>

            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>

            <section id="projects" className="snap-start">
                {/*@ts-ignore*/}
                <Projects projects={projects} />
            </section>

            <section id="contact" className="snap-center">
                <ContactMe email={pageInfo?.email}
                           phone_number={pageInfo?.phone_number}
                           address={pageInfo?.address}
                />
            </section>
        </div>
    );
};

export default HomePage;
