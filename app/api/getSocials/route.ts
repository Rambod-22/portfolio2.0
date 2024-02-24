import { Social } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { sanityClient } from "../../../sanity";

const query = groq`
    *[_type == 'social']
`;

type Data = {
    socials: Social[]
}

export async function GET(
    req: Request,
) {
    const socials: Social[] = await sanityClient.fetch(query)
    return NextResponse.json({socials})
}
