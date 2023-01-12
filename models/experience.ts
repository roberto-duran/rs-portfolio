import {SanityBody, SanityImage} from "./sanityI";
import {Technology} from "./technology";

export interface Experience extends SanityBody {
    _type: "experience";
    companyName: string;
    companyDescription: string;
    companyImage: SanityImage;
    companyLogo: SanityImage;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}
