import { PageInfo, Skill, Social } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { sanityClient } from "../../../sanity";

const query = groq`
    *[_type == "pageInfo"][0]
`

type Data = {
    pageInfo: PageInfo
}
export async function GET(
    req: Request,
) {
    const pageInfo: PageInfo = await sanityClient.fetch(query)
    return NextResponse.json({pageInfo})
}


export async function getPageInfo() {
    const pageInfo: PageInfo = await sanityClient.fetch(query)
    
    return JSON.stringify(pageInfo)
}