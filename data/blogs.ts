export const blogs = [
  {
    id: 1,
    title: "Understanding Routing in Next.js: Pages vs App Router",
    description:
      "A beginner-friendly guide to how routing works in Next.js and the difference between Pages Router and App Router.",
    author: "Navira Lobo",
    references: [
      "https://nextjs.org/docs/routing/introduction",
      "https://nextjs.org/docs/app",
    ],
    explanation:
      "Routing is the backbone of any Next.js application. In the Pages Router, routes are created using the file system inside the pages folder. Each file automatically becomes a route. The App Router, introduced in newer versions, provides more flexibility using layouts, nested routes, and server components. Understanding both approaches is crucial because many real-world projects still use Pages Router while modern apps are shifting towards App Router. This blog walks through file-based routing, dynamic routes like [id].js, and when to choose each approach.",
  },
  {
    id: 2,
    title: "Dynamic Routes in Next.js Explained with Examples",
    description:
      "Learn how to create dynamic routes and build scalable blog pages using parameters.",
    author: "Navira Lobo",
    references: ["https://nextjs.org/docs/routing/dynamic-routes"],
    explanation:
      "Dynamic routing allows you to create pages based on data. Instead of hardcoding routes, Next.js lets you use square brackets like [id].js to define dynamic segments. This is especially useful for blogs, eCommerce, and dashboards. Combined with getStaticPaths, you can pre-render pages at build time for better performance. This article demonstrates how to fetch data based on route parameters and build a dynamic blog detail page step-by-step.",
  },
  {
    id: 3,
    title: "Mastering getStaticProps and getStaticPaths",
    description:
      "Deep dive into static site generation in Next.js using getStaticProps and getStaticPaths.",
    author: "Navira Lobo",
    references: ["https://nextjs.org/docs/basic-features/data-fetching"],
    explanation:
      "Static Site Generation (SSG) is one of the most powerful features of Next.js. getStaticProps allows you to fetch data at build time, while getStaticPaths defines which dynamic pages should be pre-rendered. This combination ensures blazing fast performance and SEO-friendly pages. In this blog, we explore how these functions work together, common mistakes developers make, and how to structure your data fetching logic efficiently.",
  },
  {
    id: 4,
    title: "Styling in Next.js with Tailwind CSS",
    description:
      "A practical guide to setting up and using Tailwind CSS in your Next.js project.",
    author: "Navira Lobo",
    references: [
      "https://tailwindcss.com/docs",
      "https://nextjs.org/docs/basic-features/built-in-css-support",
    ],
    explanation:
      "Tailwind CSS is a utility-first framework that helps you build modern UIs quickly. In Next.js, it integrates seamlessly and allows you to write responsive styles directly in your components. This blog covers installation, configuration, custom themes, and best practices. You'll also learn how to avoid common pitfalls like class clutter and how to structure reusable components for cleaner code.",
  },
  {
    id: 5,
    title: "Building Responsive Layouts with Tailwind in Next.js",
    description:
      "Learn how to create fully responsive designs using Tailwind’s breakpoint system.",
    author: "Navira Lobo",
    references: ["https://tailwindcss.com/docs/responsive-design"],
    explanation:
      "Responsive design is essential in modern web development. Tailwind makes it easy with its mobile-first breakpoint system like sm, md, lg, and xl. In this blog, we explore how to build flexible layouts, responsive navigation bars, and adaptive grids. Real examples include building a responsive header with a hamburger menu and optimizing layouts for different screen sizes.",
  },
  {
    id: 6,
    title: "Combining Routing, Data Fetching, and Styling in a Real Blog App",
    description:
      "A complete guide to building a production-ready blog using Next.js concepts.",
    author: "Navira Lobo",
    references: ["https://nextjs.org/docs", "https://tailwindcss.com/docs"],
    explanation:
      "This blog brings everything together—routing, data fetching, and styling. You’ll build a full blog app using Pages Router, implement dynamic routes for blog details, fetch data using getStaticProps and getStaticPaths, and style everything using Tailwind CSS. This is a hands-on guide designed to simulate a real-world project and help you connect all the concepts into one cohesive application.",
  },
];
