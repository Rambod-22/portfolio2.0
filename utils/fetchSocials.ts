import { Social} from "@/typings";
import { getSocials } from "@/app/api/getSocials/route";
export const fetchSocials = async() => {
  //  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`, { next: { revalidate: 10 }, mode: "no-cors" })

 //   const data = await res.json()
  //  const socials: Social[] = data.socials;

    // console.log("fetching", skills)
    const res = await getSocials()
    const data = await JSON.parse(res)
    const socials = data;
  //  console.log({socials})

    return socials;
}