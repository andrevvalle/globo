import Image from "next/image";

interface Props {
  index: number;
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string;
  synopsis: string;
  actors: string[];
  image: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

const MovieCard: React.FC<Props> = ({
  id,
  index,
  title,
  year,
  director,
  genre,
  synopsis,
  actors,
  image,
  createdAt,
  updatedAt,
  authorId,
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
        <a className="relative block aspect-square" href={`/detail/${id}`}>
          <Image
            loading="lazy"
            decoding="async"
            className="object-cover transition-all"
            width={500}
            height={500}
            src={image}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
            }}
            alt="Thumbnail"
          />
        </a>
      </div>
      <div className="">
        <div>
          <div className="flex gap-3">
            <a href="#">
              <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">
                {genre}
              </span>
            </a>
          </div>
          <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
            <a href={`/detail/${id}`}>
              <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                {title}
              </span>
            </a>
          </h2>
          <div className="mt-3 flex items-center space-x-3 d-500 dark:d-400">
            <a href="#">
              <div className="flex items-center gap-3">
                <span className="truncate text-sm">Diretor: {director}</span>
              </div>
            </a>
            <span className="text-xs d-300 dark:d-600">•</span>
            <time
              className="truncate text-sm"
              dateTime="2022-10-21T15:48:00.000Z"
            >
              Ano: {year}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
