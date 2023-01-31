import { Project } from "../models/project";

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getProjects`);
    const data = await res.json();
    const projects: Project[] = data.projects;

    return projects;
}
