import SearchInput from "../components/searchInput";
import ResultSearch from "../components/resultSearch";
import { useSearchQuery } from "../shared/services/movieApi";
import ShowError from "../components/showNotification/showError";
import useQueryParams from "../shared/hooks/useQueryParams";
import Pagination from "../components/pagination";
import Progress from "../components/loading/progress";
import { Divider } from "@mui/material";

export default function Search() {
  const { query, s } = useQueryParams();
  const ShowCount = ({ count }: { count: string }) => {
    return count && <Divider>{`${count} Movies`}</Divider>;
  };

  const { data, isLoading, isFetching, error } = useSearchQuery(query);

  return (
    <div className="flex flex-col gap-3 w-full px-4 justify-center">
      <SearchInput value={s!} isLoading={isLoading || isFetching} />
      {isLoading || isFetching ? (
        <Progress />
      ) : (
        <ShowCount count={data.totalResults} />
      )}
      <ShowError error={error} />
      <Pagination totalResults={data?.totalResults} pageCount="10" />
      <ResultSearch data={data} />
      <Pagination totalResults={data?.totalResults} pageCount="10" />
    </div>
  );
}
