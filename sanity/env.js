export const apiVersion =
  '2024-02-22'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = "tf1sb56s";
export const useCdn = process.env.NODE_ENV === "production"
