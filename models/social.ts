import {SanityBody} from "./sanityI";

export interface Social extends SanityBody {
    _type: "social"
    title: string;
    url: string;
}
