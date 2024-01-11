import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany({});

  return (
    <div className="flex flex-wrap">
      {snippets.map((snippet) => (
        <div key={snippet.id} className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="p-6">
              <p className="text-xl font-semibold text-gray-900">
                {snippet.title}
              </p>
              <pre className="mt-3 text-base text-gray-500">{snippet.code}</pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
