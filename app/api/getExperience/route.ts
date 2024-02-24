import { Experience, Project, Skill, Social } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { sanityClient } from "../../../sanity";

const query = groq`
    *[_type == 'experience'] {
      ...,
      technologies[]->
    }
`;

type Data = {
    experiences: Experience[]
}
export async function GET(
    req: Request,
) {
    const experiences: Experience[] = await sanityClient.fetch(query)
    return NextResponse.json({experiences})
}

export async function getExperience() {
    const experiences: Experience[] = await sanityClient.fetch(query)
    console.log({experiences})
    return JSON.stringify(experiences)
}
