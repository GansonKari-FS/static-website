import Link from "next/link";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 rounded-lg bg-white px-4 py-3 font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-200">
              Static Website Project
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Kari Ganson&apos;s Web Development Journal
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A growing collection of reflections, projects, and lessons from my
              Full Sail University web development coursework.
            </p>
          </header>

          <section aria-labelledby="latest-articles-heading">
            <h2
              id="latest-articles-heading"
              className="mb-10 text-center text-3xl font-bold sm:text-4xl"
            >
              Latest Articles
            </h2>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl">
                <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-8 text-white">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                    Exercise 2.6
                  </p>

                  <h3 className="text-3xl font-bold leading-tight">
                    Building and Deploying an API
                  </h3>
                </div>

                <div className="flex flex-1 flex-col space-y-5 px-6 py-8">
                  <p className="leading-8 text-slate-700">
                    What I learned about API requests, testing with Postman,
                    deployment, and reliable server responses.
                  </p>

                  <div
                    className="flex flex-wrap gap-3"
                    aria-label="Article topics"
                  >
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

                  <div className="mt-auto pt-2">
                    <Link
                      href="/building-api"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white outline-none transition hover:bg-blue-800 focus-visible:ring-4 focus-visible:ring-blue-300"
                    >
                      Read Article
                      <span className="ml-2" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>

              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl">
                <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 px-6 py-8 text-white">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    Exercise 3.6
                  </p>

                  <h3 className="text-3xl font-bold leading-tight">
                    Securing an API
                  </h3>
                </div>

                <div className="flex flex-1 flex-col space-y-5 px-6 py-8">
                  <p className="leading-8 text-slate-700">
                    What I learned about authentication, authorization, request
                    validation, HTTPS, environment variables, and safe error
                    handling.
                  </p>

                  <div
                    className="flex flex-wrap gap-3"
                    aria-label="Article topics"
                  >
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

                  <div className="mt-auto pt-2">
                    <Link
                      href="/securing-api"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-cyan-700 px-6 py-3 font-semibold text-white outline-none transition hover:bg-cyan-800 focus-visible:ring-4 focus-visible:ring-cyan-300"
                    >
                      Read Article
                      <span className="ml-2" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>

              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl">
                <div className="bg-gradient-to-r from-violet-800 via-purple-800 to-fuchsia-800 px-6 py-8 text-white">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-100">
                    Exercise 4.6
                  </p>

                  <h3 className="text-3xl font-bold leading-tight">
                    Authentication Flow
                  </h3>
                </div>

                <div className="flex flex-1 flex-col space-y-5 px-6 py-8">
                  <p className="leading-8 text-slate-700">
                    What I learned about sign-in requests, password
                    verification, sessions, tokens, authorization, expiration,
                    and secure sign-out.
                  </p>

                  <div
                    className="flex flex-wrap gap-3"
                    aria-label="Article topics"
                  >
                    <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-800">
                      Authentication
                    </span>

                    <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                      Sessions
                    </span>

                    <span className="rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-semibold text-fuchsia-800">
                      Tokens
                    </span>
                  </div>

                  <div className="mt-auto pt-2">
                    <Link
                      href="/authentication-flow"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-violet-800 px-6 py-3 font-semibold text-white outline-none transition hover:bg-violet-900 focus-visible:ring-4 focus-visible:ring-violet-300"
                    >
                      Read Article
                      <span className="ml-2" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section
            aria-labelledby="about-site-heading"
            className="mt-12 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:p-8"
          >
            <h2 id="about-site-heading" className="text-2xl font-bold">
              About This Site
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              This website began as a Module 1 static-site project and continues
              to grow with new technical articles about APIs, deployment,
              security, authentication, and multi-platform development.
            </p>

            <a
              href="https://github.com/GansonKari-FS/static-website"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white outline-none transition hover:bg-white hover:text-slate-950 focus-visible:ring-4 focus-visible:ring-white/50 sm:w-auto"
            >
              View GitHub Repository
              <span className="sr-only"> in a new tab</span>
            </a>
          </section>

          <footer className="mt-12 text-center text-sm text-slate-400">
            © 2026 Kari Ganson • Static Website Project
          </footer>
        </div>
      </main>
    </>
  );
}
