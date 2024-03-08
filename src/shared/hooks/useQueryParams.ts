import { useMemo } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import getSearchQuery from "../helper/getSearchQuery";
import { removeEmpty } from "../helper/removeEmppty";

export default function useQueryParams() {
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  const s = queryParameters.get("s");
  const page = queryParameters.get("page");
  const type = queryParameters.get("type");
  const y = queryParameters.get("y");

  const setPage = (page: string) => {
    navigate({
      pathname: `/`,
      search: createSearchParams(removeEmpty({ s, page, type, y })).toString(),
    });
  };

  const setY = (y: string) => {
    navigate({
      pathname: `/`,
      search: createSearchParams(removeEmpty({ s, page, type, y })).toString(),
    });
  };

  const setType = (type: string) => {
    navigate({
      pathname: `/`,
      search: createSearchParams(removeEmpty({ s, page, type, y })).toString(),
    });
  };

  const setS = (s: string) => {
    navigate({
      pathname: `/`,
      search: createSearchParams(removeEmpty({ s, type, y })).toString(),
    });
  };

  const query = useMemo(() => {
    return getSearchQuery({ s, page, type, y });
  }, [s, page, type, y]);

  return { query, s, page, type, y, setPage, setS, setY, setType };
}
