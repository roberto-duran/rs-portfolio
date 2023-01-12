import {SanityBody, SanityImage} from "./sanityI";

export interface Skill extends SanityBody {
    _type: "skill";
    image: SanityImage;
    progress: number;
    title: string;
}
