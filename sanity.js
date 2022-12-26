import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url";
import { version } from "react";

const client = sanityClient({
    projectId: "6ljfk7gg",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;