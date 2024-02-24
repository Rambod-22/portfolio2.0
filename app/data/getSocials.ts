import { Social } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == 'social']
`;

type Data = {
    socials: Social[]
}

export async function getSocials() {
    const socials: Social[] = await sanityClient.fetch(query)
    return JSON.stringify(socials)
}