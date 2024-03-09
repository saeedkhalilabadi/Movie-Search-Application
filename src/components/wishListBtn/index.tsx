import { LoadingButton } from "@mui/lab";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { SearchDataItemType } from "../../shared/types/movies.type";
import { useDispatch } from "react-redux";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../store/wishlistState/wishListSlice";
import useWishlist from "../../shared/hooks/useWishlist";

type WishlistButtonProps = {
  movie: SearchDataItemType;
};

export default function WishlistButton(props: WishlistButtonProps) {
  const { movie } = props;
  const { isFavorite } = useWishlist();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isFavorite(movie.imdbID)) dispatch(deleteFromWishlist(movie.imdbID));
    else dispatch(addToWishlist(movie));
  };

  return (
    <LoadingButton loading={false} variant="text" onClick={handleClick}>
      {isFavorite(movie.imdbID) ? (
        <FavoriteOutlinedIcon />
      ) : (
        <FavoriteBorderOutlinedIcon />
      )}
    </LoadingButton>
  );
}
