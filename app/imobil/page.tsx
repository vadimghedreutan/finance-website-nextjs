import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { AfterListSection } from "../components/AfterListSection";
import NavigationHome from "../components/NavigationHome";

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
};

export default function ImobilPage() {
  const dir = path.join(process.cwd(), "posts/imobil");
  const files = fs.readdirSync(dir);

  const posts: Post[] = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
    };
  });

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1280px] px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-[#C6912B] text-sm font-semibold tracking-wide uppercase pb-3">
            Procurarea locuinței
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-roboto text-[#0C3559]">
            De ce să achiți chirie când poți deveni proprietarul locuinței tale?
          </h1>
        </div>

        {/* Posts Grid */}
        {/* Home Navigation Arrow */}
        <NavigationHome />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/imobil/${post.slug}`}
              className="
    group flex h-full flex-col justify-between rounded-xl bg-white p-6 shadow-sm
    ring-1 ring-gray-200 transition
    hover:-translate-y-1 hover:shadow-lg hover:ring-[#C6912B]   
    active:translate-y-1 active:shadow-sm active:ring-gray-300  
    md:active:translate-y-0 md:active:shadow-lg md:active:ring-[#C6912B] 
  "
            >
              <h3 className="text-lg font-semibold text-[#0C3559] group-hover:text-[#C6912B] transition">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* AfterListSection Component */}
      <div className="mx-auto max-w-[1280px] px-4">
        <AfterListSection />
      </div>
    </section>
  );
}
