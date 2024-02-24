import { Experience } from "@/typings";

export const fetchExperiences = async() => {
    const res = await fetch(`http://localhost:3000/api/getExperience`, { next: { revalidate: 10 } , mode: "no-cors"})

    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    // console.log("fetching", skills)

    return experiences;
}