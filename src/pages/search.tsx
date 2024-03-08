

import SearchInput from "../components/searchInput";
import ResultSearch from "../components/resultSearch";
import { useSearchQuery } from "../shared/services/movieApi";
import ShowError from "../components/showNotification/showError";
import useQueryParams from "../shared/hooks/useQueryParams";
import Pagination from "../components/pagination";

export default function Search() {
  const { query, s } = useQueryParams();

  const { data, isLoading, error } = useSearchQuery(query);

  return (
    <div className="flex flex-col gap-3 w-full px-4">
      <SearchInput value={s!} isLoading={isLoading} />
      <ShowError error={error} />
      <Pagination totalResults={data?.totalResults} pageCount="10" />
      <ResultSearch data={data} />
      <Pagination totalResults={data?.totalResults} pageCount="10" />
    </div>
  );
}
