import { Experience } from "../models/experience";

export const fetchExperiences = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getExperiences`);
    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
}
