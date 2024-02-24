import { PageInfo, Skill, Social } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == "pageInfo"][0]
`

type Data = {
    pageInfo: PageInfo
}


export async function getPageInfo() {
    const pageInfo: PageInfo = await sanityClient.fetch(query)
    
    return JSON.stringify(pageInfo)
}