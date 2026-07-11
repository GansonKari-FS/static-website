import Image from "next/image";
import Link from "next/link";

export default function BuildingApiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-6">
      <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 text-white p-8">
          <h1 className="text-4xl font-bold">
            Building and Deploying an API: What I Learned
          </h1>

          <Image
            src="/api-deployment.jpg"
            alt="Cloud infrastructure representing API deployment"
            width={900}
            height={500}
            className="rounded-lg my-6 shadow-lg"
          />

          <p className="mt-3 text-lg">Exercise 2.6 • Static Website Project</p>
        </div>

        {/* Lead Image */}
        <div className="p-8">
          <Image
            src="/api-image.jpg"
            alt="API Development"
            width={1200}
            height={700}
            className="rounded-lg shadow-md w-full h-auto"
          />

          <p className="text-sm text-gray-500 mt-2 italic">
            Figure 1. Building and testing an API.
          </p>
        </div>

        {/* Article */}
        <div className="px-8 pb-10 space-y-6 text-gray-700 leading-8">
          <p>
            As I worked through this exercise, I wanted to understand what
            happens after an API is created. I found Microsoft's guidance on Web
            API implementation helpful because it explains that building an API
            is only part of the process. Once an API is complete, it must be
            deployed to a server where other applications can access it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Understanding API Requests
          </h2>

          <p>
            One important lesson I learned is that an API should provide
            consistent and predictable responses. Different HTTP methods have
            different purposes. For example, GET requests retrieve information
            without changing data, while POST requests create new resources.
            Using the correct method makes APIs easier to understand and
            maintain.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Testing an API</h2>

          <p>
            I also learned that testing is an essential part of API development.
            During this exercise, I used Postman to send GET and POST requests
            to my local API. Seeing successful responses with 200 OK and 201
            Created helped me understand how applications communicate with a
            server and confirm that requests are working correctly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Deploying an API</h2>

          <p>
            Another concept I found interesting is that deployment is more than
            simply uploading files. Before an API is deployed, developers should
            test it thoroughly, use meaningful HTTP status codes, and ensure
            that clients receive consistent JSON responses. Once deployed, the
            API should continue to be monitored and maintained so it remains
            reliable as changes are made over time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Reflection</h2>

          <p>
            Overall, this exercise helped me understand that APIs connect the
            front end of an application with the server. Building an API
            requires careful planning, but deploying and testing it are just as
            important. Using Postman gave me hands-on experience with how
            requests and responses work, making the concepts much easier to
            understand in practice.
          </p>

          <hr className="my-8" />

          <h3 className="text-xl font-semibold text-gray-900">References</h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Microsoft Learn. <em>Web API implementation.</em>{" "}
              https://learn.microsoft.com/azure/architecture/best-practices/api-implementation
            </li>

            <li>
              Google Cloud. <em>Developing APIs: A Comprehensive Guide.</em>{" "}
              https://cloud.google.com/discover/what-is-api-development
            </li>
          </ul>

          <div className="pt-8">
            <Link
              href="/"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
