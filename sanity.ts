import {createClient} from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: "production",
    projectId: "tf1sb56s",
    apiVersion: "2021-03-25",
    useCdn: false,
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source)