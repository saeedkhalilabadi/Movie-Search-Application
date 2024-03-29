import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import LoadingButton from "@mui/lab/LoadingButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import useQueryParams from "../../shared/hooks/useQueryParams";

type SearchInputProps = {
  isLoading?: boolean;
  className?: string;
  value?: string;
};
export default function SearchInput(props: SearchInputProps) {
  const { className, isLoading, value } = props;
  const [text, setText] = useState("");
  const { setS } = useQueryParams();

  useEffect(() => {
    if (value) {
      setText(value);
      setS(value);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text.length > 0) setS(text);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      className={`flex flex-row items-center w-full max-w-[700px] mx-auto ${className}`}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter Movie Name ...."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => setText(e.target.value)}
      />
      <LoadingButton
        loading={isLoading}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </LoadingButton>
    </Paper>
  );
}
