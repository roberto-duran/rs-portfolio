import {SanityBody, SanityImage} from "./sanityI";


export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroudInformation: string;
    email: string;
    role: string;
    heroImage: SanityImage;
    name: string;
    phoneNumber: string
    profilePic: SanityImage;
}
