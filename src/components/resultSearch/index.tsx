
import { SearchDataItemType } from "../../shared/types/movies.type";
import MovieActionAreaCard from "../cart";

type DataType = {
  Search?: SearchDataItemType[];
  Response: "True" | "False";
  Error?: string;
  totalResults?: string;
};

type ResultSearchProps = {
  data?: DataType;
  className?: string;
};

export default function ResultSearch(props: ResultSearchProps) {
  const { data, className } = props;

  if (data?.Response === "False" && data?.Error)
    return <p className="mx-auto ">{data.Error}</p>;
  if (data?.Search)
    return (
      <>
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 justify-center ${className}`}
        >
          {data?.Search?.map((movie: SearchDataItemType) => (
            <MovieActionAreaCard key={movie.imdbID} {...movie} />
          ))}
        </div>
      </>
    );
}
