import { useGetByIdQuery } from "../shared/services/movieApi";
import { useParams } from "react-router-dom";
import { CardMedia, Chip, Divider, Rating, Typography } from "@mui/material";
import ShowError from "../components/showNotification/showError";
import ShowMessage from "../components/showResultQuery/showMessage";
import StarIcon from "@mui/icons-material/Star";

export default function ShowById() {
  let { imdbID } = useParams();
  const { data, error } = useGetByIdQuery(`i=${imdbID}`);

  const ShowAttribute = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => {
    return (
      <p className="flex flex-row items-center gap-2 justify-start text-gray-700 w-full text-sm">
        {`${label}: `}
        <span className="text-gray-900 font-medium">{value}</span>
      </p>
    );
  };

  return (
    <div className="h-full w-full text-black">
      <ShowError error={error} />
      <ShowMessage message={data?.Error} />
      {data ? (
        <>
          <article className="w-[80%] h-[80%] !bg-[unset] flex flex-col md:flex-row gap-5 mx-auto">
            <CardMedia
              className="!w-[80%] md:!w-[40%] object-fill mx-auto "
              component="img"
              image={data?.Poster}
              alt={data.Title}
            />
            <section className="flex flex-col gap-5 items-start justify-start w-full max-w-[500px]">
              <span className=" flex flex-row items-center justify-start w-full text-4xl font-bold h-[100px]">
                {data.Title}
              </span>
              <span className="flex flex-row items-center justify-start w-full text-sm">
                Plot: {data.Plot}
              </span>
              <Divider className="w-full" />
              <div className="flex flex-col gap-2 w-full">
                <ShowAttribute label="Actors" value={data.Actors} />
                <ShowAttribute label="Country" value={data.Country} />
                <ShowAttribute label="Year" value={data.Year} />
                <ShowAttribute label="Writer" value={data.Writer} />
                <ShowAttribute label="Language" value={data.Language} />

                <div>
                  {data?.Ratings?.map((item) => (
                    <p className="flex flex-row items-center justify-between w-full">
                      <Typography component="legend">{item.Source}</Typography>
                      <Chip
                        color="primary"
                        icon={<StarIcon />}
                        label={item.Value}
                        variant="filled"
                      />
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </article>
        </>
      ) : null}
    </div>
  );
}
