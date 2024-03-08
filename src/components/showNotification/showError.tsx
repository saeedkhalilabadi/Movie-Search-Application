import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";
import { Alert } from "@mui/material";

type ShowErrorProps = {
  error?: any;
};
export default function ShowError(props: ShowErrorProps) {
  const { error } = props;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (error) setOpen(true);
  }, [error]);

  const handleClose = (
    _event: React.SyntheticEvent | Event,
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
