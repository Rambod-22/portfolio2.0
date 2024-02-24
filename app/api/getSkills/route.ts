import { Skill, Social } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { sanityClient } from "../../../sanity";

const query = groq`
    *[_type == "skill"]
`

type Data = {
    skills: Skill[]
}
export async function GET(
    req: Request,
) {
    const skills: Skill[] = await sanityClient.fetch(query)
    return NextResponse.json({skills})
}




