import * as React from "react";
import Paginate from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import useQueryParams from "../../shared/hooks/useQueryParams";

type PaginationProps = {
  totalResults: number;
  pageCount: string;
};
export default function Pagination(props: PaginationProps) {
  const [page, setPage] = useState(1);
  const { pageCount, totalResults } = props;
  const count = Math.round(Number(totalResults) / Number(pageCount));
  const { setPage: setPageQuery } = useQueryParams();

  React.useEffect(() => {
    setPageQuery(String(page));
  }, [page]);

  return (
    count > 1 && (
      <Stack spacing={2} className=" mx-auto justify-center">
        <Paginate
          count={count}
          onChange={(_e, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    )
  );
}
