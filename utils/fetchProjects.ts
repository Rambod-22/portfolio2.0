import { Project } from "@/typings";
import { getProjects } from "@/app/api/getProjects/route";
export const fetchProjects = async() => {
  //  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, { next: { revalidate: 10 } , mode: "no-cors"})

  //  const data = await res.json()
 //   const projects: Project[] = data.projects;

    // console.log("fetching", skills)
    const res = await getProjects()
    const data = await JSON.parse(res)
    
    const projects = data;
  //  console.log({projects})

    return projects;
}