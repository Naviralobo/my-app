import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  description: string;
  author?: string;
  references?: string[];
  explanation?: string;
}

interface BlogProp {
  blog: Blog;
}

export default function BlogDetail({ blog }: BlogProp) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <div className="mt-4 border border-muted rounded-lg p-4  max-w-4xl">
        <h3 className="text-xl font-semibold">{blog.description}</h3>
        <ul>
          {blog.explanation?.split(". ").map((l, i) => (
            <li key={i} className="leading-relaxed mb-2">
              {l}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold">References</h3>
        {blog?.references && (
          <div>
            {blog?.references.map((r, i) => (
              <Link className="text-primary text-sm underline mb-2" key={i} href={r}>
                {r}
              </Link>
            ))}
          </div>
        )}
       {blog.author && <p className="my-2 text-muted text-sm">author:{blog?.author}</p>}
      </div>
    </div>
  );
}
//all paths must be generated before hand-this is just for path generation
export async function getStaticPaths() {
  const { blogs } = await import("@/data/blogs");

  const paths = blogs.map((blog: { id: number }) => ({
    params: { id: blog.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { blogs } = await import("@/data/blogs");

  const blog = blogs.find(
    (blog: { id: number }) => blog.id.toString() === params.id,
  );

  return {
    props: { blog },
  };
}
