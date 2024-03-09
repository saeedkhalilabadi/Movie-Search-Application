import { useSelector } from "react-redux";
import { wishlist as reduxWishlist } from "../store/wishlistState/wishListSlice";
import MovieActionAreaCard from "../components/cart";
import { SearchDataItemType } from "../shared/types/moves.type";

export default function Favorite() {
  const wishlist = useSelector(reduxWishlist);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-center `}
    >
      {wishlist?.map((movie: SearchDataItemType) => (
        <MovieActionAreaCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
