import {SanityBody, SanityImage} from "./sanityI";
export interface Technology extends SanityBody {
    _type: "skill";
    image: SanityImage;
    progress: number;
    title: string;
}
