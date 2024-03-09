import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { SearchDataItemType } from "../../shared/types/moves.type";
import { Link } from "react-router-dom";
import WishlistButton from "../wishListBtn";

type MovieActionAreaCardProps = SearchDataItemType & {
  className?: string;
};

export default function MovieActionAreaCard(props: MovieActionAreaCardProps) {
  const { Poster, Title, Type, Year, imdbID, className } = props;
  return (
    <Card className={`w-full flex flex-col justify-between ${className}`}>
      <CardActionArea>
        <Link to={`/movie/${imdbID}`}>
          <CardMedia
            className="h-[85%] object-fill"
            component="img"
            image={Poster}
            alt={Title}
          />
        </Link>
        <CardContent>
          <Typography
            className="w-full h-full !text-sm !font-bold "
            gutterBottom
            component="div"
          >
            {Title}
          </Typography>
          <section className="w-full  flex flex-row items-center gap-2 justify-start">
            <Chip label={Year} size="small" />
            <Chip label={Type} size="small" />
          </section>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/movie/${imdbID}`}>
          <Button size="small" color="primary">
            Details
          </Button>
        </Link>
        <WishlistButton move={{ Poster, Title, Type, Year, imdbID }} />
      </CardActions>
    </Card>
  );
}
