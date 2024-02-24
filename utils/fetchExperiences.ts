//import { Experience } from "@/typings";
import { getExperience } from "@/app/api/getExperience/route";
export const fetchExperiences = async() => {
  //  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, { next: { revalidate: 10 } })
  //  const data = await res.json()
    const res = await getExperience()
    const data = await JSON.parse(res)
    const experiences = data;
   // console.log({experiences})

    // console.log("fetching", skills)

    return experiences;
}