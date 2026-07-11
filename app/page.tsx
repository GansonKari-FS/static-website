import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-200">
            Static Website Project
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Kari Ganson&apos;s Web Development Journal
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            A growing collection of reflections, projects, and lessons from my
            web development coursework.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl">
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-8 text-white sm:px-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Featured Article
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Building and Deploying an API: What I Learned
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                A reflection on API requests, testing with Postman, deployment,
                and the importance of reliable responses.
              </p>
            </div>

            <div className="space-y-5 px-6 py-8 sm:px-8">
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                In this Exercise 2.6 update, I explored what happens after an
                API is created, how developers test requests, and what matters
                when an API is deployed to a live environment.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                  APIs
                </span>

                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-800">
                  Postman
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Deployment
                </span>
              </div>

              <Link
                href="/building-api"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 sm:w-auto"
              >
                Read the Article →
              </Link>
            </div>
          </article>

          <aside className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:p-8">
            <h2 className="text-2xl font-bold">About This Site</h2>

            <p className="mt-4 leading-8 text-slate-300">
              This website began as a Module 1 static-site deployment project.
              It is now being updated with new technical articles that reflect
              what I am learning throughout the course.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="font-bold text-white">Built With</h3>
                <p className="mt-2 text-slate-300">
                  Next.js, TypeScript, Tailwind CSS, GitHub, and Vercel
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="font-bold text-white">Current Update</h3>
                <p className="mt-2 text-slate-300">
                  Exercise 2.6 — Building and Deploying an API
                </p>
              </div>
            </div>

            <a
              href="https://github.com/GansonKari-FS/static-website"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              View GitHub Repository
            </a>
          </aside>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-400">
          © 2026 Kari Ganson • Static Website Project
        </footer>
      </div>
    </main>
  );
}
