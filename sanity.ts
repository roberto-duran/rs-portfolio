import {createClient} from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "53n251be",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion:  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-11-16", // https://www.sanity.io/docs/api-versioning
    useCdn: true
}

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(config)
export const urlFor = (source: any) => builder.image(source);
