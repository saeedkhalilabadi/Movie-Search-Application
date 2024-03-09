import { Alert } from "@mui/material";

type ShowMessageType = {
  message?: string;
};

export default function ShowMessage(props: ShowMessageType) {
  const { message } = props;

  return (
    message && (
      <section className="w-full text-sm mx-auto flex flex-row items-center justify-center px-3 ">
        <Alert className="w-full" variant="filled" severity="error">
          {message}
        </Alert>
      </section>
    )
  );
}
