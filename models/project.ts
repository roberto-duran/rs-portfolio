import {SanityBody, SanityImage} from "./sanityI";
import {Technology} from "./technology";

export interface Project extends SanityBody{
    _type: "project";
    title: string;
    image:SanityImage;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}
