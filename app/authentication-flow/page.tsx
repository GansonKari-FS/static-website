import Image from "next/image";
import Link from "next/link";

export default function AuthenticationFlowPage() {
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
        className="min-h-screen bg-gradient-to-br from-slate-100 via-violet-50 to-slate-200 px-4 py-6 text-slate-800 sm:px-6 sm:py-10 lg:px-8"
      >
        <article className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl sm:rounded-3xl">
          <header className="bg-gradient-to-r from-violet-800 via-purple-800 to-fuchsia-800 px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-100">
              Exercise 4.6 • Static Website Project
            </p>

            <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Authentication Flow: What I Learned
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-violet-100 sm:text-lg">
              A reflection on how users sign in, how credentials are verified,
              and how applications maintain secure access.
            </p>
          </header>

          <figure className="px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12">
            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-xl bg-slate-200 shadow-md sm:rounded-2xl">
              <Image
                src="/authentication-flow.png"
                alt="A user signing in on a mobile device, representing the beginning of an authentication flow."
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
                className="object-cover object-center"
              />
            </div>

            <figcaption className="mt-3 text-sm leading-6 text-slate-600">
              Figure 1. Example of a secure login screen used during the
              authentication process.
            </figcaption>
          </figure>

          <div className="space-y-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <section aria-labelledby="introduction-heading">
              <h2 id="introduction-heading" className="sr-only">
                Introduction
              </h2>

              <p className="max-w-3xl text-base leading-8 sm:text-lg">
                Authentication is the process an application uses to confirm
                that a user is who they claim to be. Before learning about
                authentication flow, I mostly thought of signing in as a simple
                form with an email address and password. I now understand that
                several important steps happen behind the scenes before access
                is granted.
              </p>
            </section>

            <section
              aria-labelledby="signin-heading"
              className="border-t border-slate-200 pt-8"
            >
              <h2
                id="signin-heading"
                className="text-2xl font-bold text-slate-950 sm:text-3xl"
              >
                The Sign-In Request
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 sm:text-lg">
                The authentication flow begins when a user submits their login
                credentials. The client securely sends this information to the
                server using HTTPS. The server then checks whether the account
                exists and verifies that the credentials are correct before
                allowing access.
              </p>
            </section>

            <section
              aria-labelledby="password-heading"
              className="border-t border-slate-200 pt-8"
            >
              <h2
                id="password-heading"
                className="text-2xl font-bold text-slate-950 sm:text-3xl"
              >
                Password Verification
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 sm:text-lg">
                Passwords should never be stored in plain text. Instead,
                developers use hashing algorithms to convert passwords into
                secure values. When users sign in, the submitted password is
                hashed and compared with the stored hash rather than comparing
                readable passwords.
              </p>
            </section>

            <section
              aria-labelledby="session-heading"
              className="border-t border-slate-200 pt-8"
            >
              <h2
                id="session-heading"
                className="text-2xl font-bold text-slate-950 sm:text-3xl"
              >
                Sessions and Authentication Tokens
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 sm:text-lg">
                Once authentication succeeds, the server creates a secure
                session or issues an authentication token. These allow the user
                to continue interacting with the application without repeatedly
                entering their password while still confirming their identity on
                each request.
              </p>
            </section>

            <section
              aria-labelledby="authorization-heading"
              className="border-t border-slate-200 pt-8"
            >
              <h2
                id="authorization-heading"
                className="text-2xl font-bold text-slate-950 sm:text-3xl"
              >
                Authorization
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 sm:text-lg">
                Authentication confirms who the user is, while authorization
                determines what that user is allowed to access. Applications
                should always verify permissions on the server to prevent users
                from accessing resources that they should not be able to view or
                modify.
              </p>
            </section>

            <section
              aria-labelledby="security-heading"
              className="border-t border-slate-200 pt-8"
            >
              <h2
                id="security-heading"
                className="text-2xl font-bold text-slate-950 sm:text-3xl"
              >
                Session Expiration and Security
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 sm:text-lg">
                Secure authentication also includes proper session management.
                Sessions and tokens should expire after a period of inactivity,
                and applications should provide users with an easy way to sign
                out. These practices reduce the risk of unauthorized access if a
                device is lost or left unattended.
              </p>
            </section>

            <section
              aria-labelledby="reflection-heading"
              className="border-t border-slate-200 pt-8"
            >
              <h2
                id="reflection-heading"
                className="text-2xl font-bold text-slate-950 sm:text-3xl"
              >
                Reflection
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 sm:text-lg">
                Learning about authentication flow helped me understand that
                logging into an application involves much more than entering a
                username and password. Authentication, password hashing,
                sessions, authorization, and secure communication all work
                together to protect users and their data. Understanding this
                process has given me a greater appreciation for how secure web
                applications are designed.
              </p>
            </section>

            <section
              aria-labelledby="references-heading"
              className="border-t border-slate-200 pt-8"
            >
              <h2
                id="references-heading"
                className="text-2xl font-bold text-slate-950 sm:text-3xl"
              >
                References
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6 leading-8">
                <li>
                  Microsoft Learn.{" "}
                  <em>Authentication and Authorization in ASP.NET Core.</em>
                </li>
                <li>
                  OWASP Foundation. <em>Authentication Cheat Sheet.</em>
                </li>
              </ul>
            </section>

            <nav
              aria-label="Article navigation"
              className="border-t border-slate-200 pt-8"
            >
              <Link
                href="/"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-violet-800 px-6 py-3 font-semibold text-white transition hover:bg-violet-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300 sm:w-auto"
              >
                ← Back to Home
              </Link>
            </nav>
          </div>
        </article>
      </main>
    </>
  );
}
