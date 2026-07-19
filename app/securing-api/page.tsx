import Image from "next/image";
import Link from "next/link";

export default function SecuringApiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-200 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <article className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl">
        <header className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 sm:text-sm">
            Exercise 3.6 • Static Website Project
          </p>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Securing an API: What I Learned
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-cyan-100 sm:text-lg">
            A reflection on authentication, authorization, validation, secure
            configuration, and protecting application data.
          </p>
        </header>

        <div className="px-4 pt-4 sm:px-8 sm:pt-8 lg:px-12">
          <Image
            src="/api-security.jpg"
            alt="Illustration representing API security concepts"
            width={1400}
            height={700}
            priority
            className="h-auto w-full rounded-xl object-cover shadow-lg sm:rounded-2xl"
          />

          <p className="mt-3 text-center text-sm italic text-slate-500">
            Figure 1. Illustration representing API security concepts.
          </p>
        </div>

        <div className="space-y-8 px-5 py-8 text-slate-700 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <section className="space-y-4">
            <p className="text-base leading-8 sm:text-lg">
              As I continued learning about APIs, I realized that building and
              deploying an API is only part of the process. An API also needs to
              be protected from unauthorized access, invalid requests, exposed
              credentials, and other security risks. Security should be planned
              from the beginning instead of added only after a problem occurs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Authentication and Authorization
            </h2>

            <p className="text-base leading-8 sm:text-lg">
              Authentication confirms who a user is, while authorization
              determines what that user is allowed to do. These two ideas work
              together, but they are not the same. A user may successfully sign
              in and still be prevented from viewing or changing information
              that belongs to another user.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Validating Requests
            </h2>

            <p className="text-base leading-8 sm:text-lg">
              API requests should never be trusted automatically. Developers
              need to validate incoming data before it is processed or stored.
              Validation can check whether required fields are present, whether
              values use the expected format, and whether the information falls
              within acceptable limits.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Protecting Secrets and Configuration
            </h2>

            <p className="text-base leading-8 sm:text-lg">
              Passwords, API keys, database credentials, and other secrets
              should not be placed directly in source code or committed to
              GitHub. Environment variables allow sensitive configuration to be
              stored separately from the application code. This also makes it
              easier to use different settings during development and
              deployment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              HTTPS and Safe Error Messages
            </h2>

            <p className="text-base leading-8 sm:text-lg">
              HTTPS encrypts information while it travels between a client and
              server. APIs should also return useful error messages without
              exposing stack traces, passwords, database details, or internal
              configuration. A helpful error response should explain the problem
              without revealing sensitive information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Reflection
            </h2>

            <p className="text-base leading-8 sm:text-lg">
              The biggest lesson I learned is that API security is made up of
              several smaller decisions. Authentication, authorization,
              validation, HTTPS, environment variables, and careful error
              handling all work together. No single feature can protect an API
              by itself, but using these practices together creates a much safer
              application.
            </p>
          </section>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-700 px-6 py-3 font-semibold text-white transition hover:bg-cyan-800 sm:w-auto"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
