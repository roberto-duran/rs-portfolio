import {Skill} from "../models/skill";

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getSkills`);
    const data = await res.json();
    const skills: Skill[] = data.skills;

    return skills;
}
