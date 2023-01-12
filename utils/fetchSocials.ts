import { Social } from "../models/social";

export const fetchSocials = async () => {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/api/getSocials`);
    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
}
