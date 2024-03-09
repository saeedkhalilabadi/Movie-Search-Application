import { useSelector } from "react-redux";
import { wishlist as reduxWishlist } from "../../store/wishlistState/wishListSlice";

export default function useWishlist() {
  const wishlist = useSelector(reduxWishlist);

  const isFavorite = (imdbID: string) => {
    const result = wishlist.filter((item) => item.imdbID === imdbID);
    if (result.length > 0) return true;
    return false;
  };

  return { isFavorite };
}
