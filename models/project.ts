import {ISkill} from "./ISkill";
export interface Project{
    id: string;
    title: string;
    image: string;
    url: string;
    description: string;
    skills: ISkill[];
}
