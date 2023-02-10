import {Skill} from "./skill";
export interface Project{
    id: string;
    title: string;
    image: string;
    url: string;
    description: string;
    skills: Skill[];
}
