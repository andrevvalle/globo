import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Filters from "./components/filters";
import MovieCard from "./components/movieCard";

async function getMovies(page: number) {
  const res = await fetch(`http://localhost:3333/movies?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home({ searchParams }: any) {
  const { data, totalPages, currentPage, links, size } = await getMovies(
    searchParams?.page || 1
  );

  return (
    <main className="flex min-h-screen flex-col items-center px-20 overflow-hidden">
      <Filters total={size} />

      <div
        className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 mb-10"
        style={{ overflow: "hidden" }}
      >
        {data.map((movie: any, index: number) => (
          <MovieCard key={index} index={index} {...movie} />
        ))}
      </div>
      <div className="w-screen mb-10">
        <div className="flex justify-center">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href={links.previous}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 d-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 text-white hover:text-black"
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>

            {Array.from(Array(totalPages).keys()).map((page) =>
              currentPage - 1 === page ? (
                <a
                  key={page}
                  href={`?page=${page + 1}`}
                  aria-current="page"
                  className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600"
                >
                  {page + 1}
                </a>
              ) : (
                <a
                  key={page}
                  href={`?page=${page + 1}`}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold d-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 text-white hover:text-black"
                >
                  {page + 1}
                </a>
              )
            )}

            <a
              href={links.next}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 d-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 text-white hover:text-black"
            >
              <span className="sr-only">Próxima</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
}
