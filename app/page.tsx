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

        <section>
          <h2 className="mb-10 text-center text-3xl font-bold">
            Latest Articles
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl">
              <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-8 text-white">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                  Exercise 2.6
                </p>

                <h3 className="text-3xl font-bold leading-tight">
                  Building and Deploying an API
                </h3>
              </div>

              <div className="space-y-5 px-6 py-8">
                <p className="leading-8 text-slate-700">
                  What I learned about API requests, testing with Postman,
                  deployment, and reliable server responses.
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
                  Read Article →
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl">
              <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 px-6 py-8 text-white">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Exercise 3.6
                </p>

                <h3 className="text-3xl font-bold leading-tight">
                  Securing an API
                </h3>
              </div>

              <div className="space-y-5 px-6 py-8">
                <p className="leading-8 text-slate-700">
                  What I learned about authentication, authorization, request
                  validation, HTTPS, environment variables, and safe error
                  handling.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800">
                    Security
                  </span>

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                    Authentication
                  </span>

                  <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-800">
                    HTTPS
                  </span>
                </div>

                <Link
                  href="/securing-api"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-700 px-6 py-3 font-semibold text-white transition hover:bg-cyan-800 sm:w-auto"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:p-8">
          <h2 className="text-2xl font-bold">About This Site</h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            This website began as a Module 1 static-site project and continues
            to grow with new technical articles about APIs, deployment, and
            multi-platform development.
          </p>

          <a
            href="https://github.com/GansonKari-FS/static-website"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950 sm:w-auto"
          >
            View GitHub Repository
          </a>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-400">
          © 2026 Kari Ganson • Static Website Project
        </footer>
      </div>
    </main>
  );
}
