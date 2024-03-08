import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { SearchDataItemType } from "../../shared/types/moves.type";
import { Link } from "react-router-dom";

type MovieActionAreaCardProps = SearchDataItemType & {
  className?: string;
};

export default function MovieActionAreaCard(props: MovieActionAreaCardProps) {
  const { Poster, Title, Type, Year, imdbID, className } = props;
  return (
    <Card className={`w-full flex flex-col justify-between ${className}`}>
      <CardActionArea className="!w-full h-full">
        <Link to={`/movie/${imdbID}`}>
          <CardMedia
            className="w-full h-[80%]  object-fill "
            component="img"
            image={Poster}
            alt={Title}
          />
        </Link>
        <CardContent>
          <Typography
            className="w-full h-full text-4xl "
            gutterBottom
            component="div"
          >
            {Title}
          </Typography>
          <Typography gutterBottom className="text-base" component="div">
            {Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/movie/${imdbID}`}>
          <Button size="small" color="primary">
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
