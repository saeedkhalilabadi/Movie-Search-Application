import { LoadingButton } from "@mui/lab";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { MoveType } from "../../shared/types/moves.type";
import { useDispatch } from "react-redux";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../store/wishlistState/wishListSlice";
import useWishlist from "../../shared/hooks/useWishlist";

type WishlistButtonProps = {
  move: MoveType;
};

export default function WishlistButton(props: WishlistButtonProps) {
  const { move } = props;
  const { isFavorite } = useWishlist();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isFavorite(move.imdbID)) dispatch(deleteFromWishlist(move.imdbID));
    else dispatch(addToWishlist(move));
  };

  return (
    <LoadingButton loading={false} variant="text" onClick={handleClick}>
      {isFavorite(move.imdbID) ? (
        <FavoriteOutlinedIcon />
      ) : (
        <FavoriteBorderOutlinedIcon />
      )}
    </LoadingButton>
  );
}
