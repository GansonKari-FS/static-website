export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Kari Ganson Static Website
      </h1>

      <p className="text-2xl text-gray-700 max-w-2xl mb-4">
        This is my 1.6 Exercise project for deploying a static website using
        Next.js.
      </p>

      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        I created this site, edited the source code, managed it through GitHub,
        and deployed it to a live server.
      </p>

      <a
        href="https://github.com/GansonKari-FS/static-website"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        View My GitHub Repository
      </a>
    </main>
  );
}
