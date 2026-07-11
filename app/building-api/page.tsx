import Image from "next/image";
import Link from "next/link";

export default function BuildingApiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <article className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl">
        <header className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">
            Exercise 2.6 • Static Website Project
          </p>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Building and Deploying an API: What I Learned
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg">
            A reflection on API requests, testing with Postman, deployment, and
            the importance of reliable responses.
          </p>
        </header>

        <div className="px-4 pt-4 sm:px-8 sm:pt-8 lg:px-12">
          <Image
            src="/api-deployment.jpg"
            alt="Cloud infrastructure representing API deployment"
            width={1600}
            height={900}
            priority
            className="h-auto w-full rounded-xl object-cover shadow-lg sm:rounded-2xl"
          />

          <p className="mt-3 text-sm italic text-slate-500">
            Figure 1. Cloud infrastructure representing API deployment.
          </p>
        </div>

        <div className="space-y-8 px-5 py-8 text-slate-700 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <section className="space-y-4">
            <p className="text-base leading-8 sm:text-lg">
              As I worked through this exercise, I wanted to understand what
              happens after an API is created. I found Microsoft&apos;s guidance
              on Web API implementation helpful because it explains that
              building an API is only part of the process. Once an API is
              complete, it must be deployed to a server where other applications
              can access it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Understanding API Requests
            </h2>

            <p className="text-base leading-8 sm:text-lg">
              One important lesson I learned is that an API should provide
              consistent and predictable responses. Different HTTP methods have
              different purposes. For example, GET requests retrieve information
              without changing data, while POST requests create new resources.
              Using the correct method makes APIs easier to understand and
              maintain.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Testing an API
            </h2>

            <p className="text-base leading-8 sm:text-lg">
              I also learned that testing is an essential part of API
              development. During this exercise, I used Postman to send GET and
              POST requests to my local API. Seeing successful responses with
              200 OK and 201 Created helped me understand how applications
              communicate with a server and confirm that requests are working
              correctly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Deploying an API
            </h2>

            <p className="text-base leading-8 sm:text-lg">
              Another concept I found interesting is that deployment is more
              than simply uploading files. Before an API is deployed, developers
              should test it thoroughly, use meaningful HTTP status codes, and
              ensure that clients receive consistent JSON responses. Once
              deployed, the API should continue to be monitored and maintained
              so it remains reliable as changes are made over time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Reflection
            </h2>

            <p className="text-base leading-8 sm:text-lg">
              Overall, this exercise helped me understand that APIs connect the
              front end of an application with the server. Building an API
              requires careful planning, but deploying and testing it are just
              as important. Using Postman gave me hands-on experience with how
              requests and responses work, making the concepts much easier to
              understand in practice.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              References
            </h2>

            <ul className="space-y-4 text-sm leading-7 sm:text-base">
              <li>
                <a
                  href="https://learn.microsoft.com/azure/architecture/best-practices/api-implementation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
                >
                  Microsoft Learn — Web API Implementation
                </a>
              </li>

              <li>
                <a
                  href="https://cloud.google.com/discover/what-is-api-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
                >
                  Google Cloud — Developing APIs: A Comprehensive Guide
                </a>
              </li>
            </ul>
          </section>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 sm:w-auto"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
