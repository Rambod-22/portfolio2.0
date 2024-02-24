import { Project } from "@/typings";

export const fetchProjects = async() => {
    const res = await fetch(`http://localhost:3000/api/getProjects`, { next: { revalidate: 10 } , mode: "no-cors"})

    const data = await res.json()
    const projects: Project[] = data.projects;

    // console.log("fetching", skills)

    return projects;
}