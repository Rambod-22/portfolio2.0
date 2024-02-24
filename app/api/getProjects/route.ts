import { Project, Skill, Social } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { sanityClient } from "../../../sanity";

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`

type Data = {
    projects: Project[]
}
export async function GET(
    req: Request,
) {
    const projects: Project[] = await sanityClient.fetch(query)
    return NextResponse.json({projects})
}

export async function getProjects() {
    const projects: Project[] = await sanityClient.fetch(query)
    return JSON.stringify(projects)
}

