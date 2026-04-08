import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const learningConcepts = [
  {
    id: 1,
    title: "Routing",
    description:
      "Understand pages and app routers, group routes, dynamic routes etc.,",
  },
  {
    id: 2,
    title: "Data Fetching",
    description:
      "Get to know the older way of generating static pages using getStaticProps and getStaticPaths",
  },
  {
    id: 3,
    title: "styling",
    description:
      "Learn how to use Tailwing css in Next for pleasing UI and better responsiveness",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="px-12">
        <section className="text-center pt-16">
          <h1 className="text-4xl font-bold text-primary">
            Learn NextJs the right way
          </h1>
          <p className="mt-4 mb-8 text-muted text-lg">
            Deeper understanding on Next to help you build scalable React
            applications through Next
          </p>
          <Link href="/blogs" className=" bg-primary text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-primary/90 transition-colors duration-300 ease-in-out">
            Explore blogs
          </Link>
        </section>

        <section className="py-12 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            What you'll learn
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {learningConcepts.map((concept) => (
              <div
                key={concept.id}
                className="border border-muted p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {concept.title}
                </h3>
                <p className="text-sm text-muted mt-2">{concept.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
