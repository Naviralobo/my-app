export default function About() {
  return (
    <div className="flex flex-col w-full justify-center items-center p-12">
      <h1 className="text-4xl font-semibold mb-8 text-primary">About Us</h1>
      <div className="w-full max-w-2xl space-y-4">
        <p className="  text-lg leading-relaxed mb-8 border border-muted rounded-lg p-4 ">
          Welcome to our Next.js blog application! This platform is built to
          share knowledge, ideas, and tutorials focused on modern web
          development using technologies like Next.js, React, and Tailwind CSS.
        </p>
        <p className="leading-relaxed text-lg border border-muted rounded-lg p-4">
          Our mission is to simplify complex concepts and provide practical,
          real-world examples that help developers grow. Whether you're a
          beginner or an experienced developer, our goal is to make learning
          accessible and enjoyable.
        </p>
      </div>
    </div>
  );
}
