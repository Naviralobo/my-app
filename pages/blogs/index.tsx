import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  description: string;
  author?: string;
  references?: string[];
  explanation?: string;
}

interface BlogsProp {
  blogs: Blog[];
}

export default function Blogs({ blogs }: BlogsProp) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center ">
        <h1 className="text-4xl font-bold text-primary ">Master Next Js </h1>
        <p className="my-4">Explore the blogs to get a deep understanding</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl ">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className="border border-muted p-6 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h3 className="font-bold">{blog.title}</h3>
            <p className="text-muted">{blog.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { blogs } = await import("@/data/blogs");

  return {
    props: {
      blogs,
    },
  };
}
