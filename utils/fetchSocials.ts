import { Social} from "@/typings";

export const fetchSocials = async() => {
    const res = await fetch(`http://localhost:3000/api/getSocials`, { next: { revalidate: 10 } })

    const data = await res.json()
    const socials: Social[] = data.socials;

    // console.log("fetching", skills)

    return socials;
}