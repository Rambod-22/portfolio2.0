import { Experience, Project, Skill, Social } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == 'experience'] {
      ...,
      technologies[]->
    }
`;

type Data = {
    experiences: Experience[]
}


export async function getExperience() {
    const experiences: Experience[] = await sanityClient.fetch(query)
    console.log({experiences})
    return JSON.stringify(experiences)
}
