import { PageInfo } from "@/typings";

export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`, { next: { revalidate: 10 } , mode: "no-cors"})

    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo;

    // console.log("fetching", skills)

    return pageInfo;
}