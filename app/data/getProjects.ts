import { Project, Skill, Social } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`

type Data = {
    projects: Project[]
}


export async function getProjects() {
    const projects: Project[] = await sanityClient.fetch(query)
    return JSON.stringify(projects)
}

