import { SearchDataItemType } from "../../shared/types/moves.type";
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

  if (data?.Response === "False" && data?.Error) return <p>{data.Error}</p>;
  if (data?.Search)
    return (
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-center ${className}`}
      >
        {data?.Search?.map((movie: SearchDataItemType) => (
          <MovieActionAreaCard
            key={movie.imdbID}
            {...movie}
          />
        ))}
      </div>
    );
}
