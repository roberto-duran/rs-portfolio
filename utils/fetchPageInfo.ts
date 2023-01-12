import { PageInfo } from "../models/pageInfo";

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/api/getPageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}
