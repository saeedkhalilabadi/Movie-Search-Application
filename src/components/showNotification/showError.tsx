import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Alert } from "@mui/material";

type ShowErrorProps = {
  error?: FetchBaseQueryError | SerializedError;
};
export default function ShowError(props: ShowErrorProps) {
  const { error } = props;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (error) setOpen(true);
  }, [error]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      className="!bg-red-300 border-red-400 border rounded-md"
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {error?.error}
      </Alert>
    </Snackbar>
  );
}
