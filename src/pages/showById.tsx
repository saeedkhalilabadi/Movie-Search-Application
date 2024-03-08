import { useGetByIdQuery } from "../shared/services/movieApi";
import { useParams } from "react-router-dom";
import { CardMedia, Paper } from "@mui/material";
import ShowError from "../components/showNotification/showError";
import ShowMessage from "../components/showResultQuery/showMessage";

export default function ShowById() {
  let { imdbID } = useParams();
  const { data, error } = useGetByIdQuery(`i=${imdbID}`);

  return (
    <div>
      <ShowError error={error} />
      <ShowMessage message={data?.Error} />
      {data ? (
        <>
          <Paper className="w-[80%] !bg-[unset] flex flex-col md:flex-row gap-3 mx-auto">
            <CardMedia
              className="!w-[80%] md:!w-[200px] object-fill mx-auto "
              component="img"
              image={data?.Poster}
              alt={data.Title}
            />
            <section className="flex flex-col gap-2 items-start justify-start w-full">
              <span className=" flex flex-row items-center justify-center w-full text-2xl h-[100px]">
                {data.Title}
              </span>
              <span className="flex flex-row items-center justify-start w-full text-sm">
                Actors: {data.Actors}
              </span>
              <span className="flex flex-row items-center justify-start w-full text-sm">
                Country: {data.Country}
              </span>
              <span className="flex flex-row items-center justify-start w-full text-sm">
                Plot: {data.Plot}
              </span>
              <span className="flex flex-row items-center justify-start w-full text-sm">
                Year: {data.Year}
              </span>
              <span className="flex flex-row items-center justify-start w-full text-sm">
                Writer: {data.Writer}
              </span>
              <span className="flex flex-row items-center justify-start w-full text-sm">
                Language: {data.Language}
              </span>
            </section>
          </Paper>
        </>
      ) : null}
    </div>
  );
}
