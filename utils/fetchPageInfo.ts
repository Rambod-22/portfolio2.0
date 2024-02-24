import { PageInfo } from "@/typings";
import { getPageInfo } from "@/app/data/getPageInfo";
export const fetchPageInfo = async() => {
  //  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`, { next: { revalidate: 10 } , mode: "no-cors"})

  //  const data = await res.json()
  //  const pageInfo: PageInfo = data.pageInfo;
    console.log("fetch page Info")

    const res = await getPageInfo()
    const data = await JSON.parse(res)
    const pageInfo = data;
    // console.log("fetching", skills)
    console.log({pageInfo})

    return pageInfo;
}