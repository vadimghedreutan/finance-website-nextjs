import fs from "fs"
import path from "path"
import matter from "gray-matter"

const DIR = path.join(process.cwd(), "posts/curentgas")

export type CurentGasPost = {
    slug: string
    title: string
    excerpt?: string
}

export function getCurentGasPosts(): CurentGasPost[] {
    const files = fs
        .readdirSync(DIR)
        .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    return files
        .map((filename) => {
            const slug = filename.replace(/\.mdx?$/, "")
            const raw = fs.readFileSync(path.join(DIR, filename), "utf-8")
            const { data } = matter(raw)
            return {
                slug,
                title: (data?.title as string) || slug,
                excerpt: (data?.excerpt as string) || "",
            }
        })
        .sort((a, b) => a.title.localeCompare(b.title))
}

export function getCurentGasBySlug(slug: string) {
    const filePath = path.join(DIR, `${slug}.mdx`)
    const raw = fs.readFileSync(filePath, "utf-8")
    const { content, data } = matter(raw)
    return { content, data }
}
