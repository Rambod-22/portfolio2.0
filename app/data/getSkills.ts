import { Skill, Social } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == "skill"]
`

type Data = {
    skills: Skill[]
}


export async function getSkills() {
    const skills: Skill[] = await sanityClient.fetch(query)
    return JSON.stringify(skills)
}


