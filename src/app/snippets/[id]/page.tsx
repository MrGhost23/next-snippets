import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    return notFound();
  }

  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="tracking-wide text-lg capitalize font-semibold">
            {snippet.title}
          </div>
          <pre className="block mt-1 bg-gray-200 p-2 rounded text-lg leading-tight font-medium text-black">
            {snippet.code}
          </pre>
        </div>

        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Link href={`/snippets/${props.params.id}/edit`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
          </Link>
          <Link href={`/snippets/${props.params.id}/delete`}>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
