import { Skill } from "@/typings";

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`, { next: { revalidate: 10 } , mode: "no-cors"})

    const data = await res.json()
    const skills: Skill[] = data.skills;

    // console.log("fetching", skills)

    return skills;
}