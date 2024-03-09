import { useSelector } from "react-redux";
import { wishlist as reduxWishlist } from "../store/wishlistState/wishListSlice";
import MovieActionAreaCard from "../components/cart";
import { SearchDataItemType } from "../shared/types/moves.type";
import { Divider, Typography } from "@mui/material";

export default function Favorite() {
  const wishlist = useSelector(reduxWishlist);

  return (
    <>
      <p className=" flex flex-row text-black text-xl w-full justify-center items-center ">
        {" "}
        Favorite List
      </p>
      <Divider>{`${wishlist.length} Moves`}</Divider>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 justify-center px-4`}
      >
        {wishlist?.map((movie: SearchDataItemType) => (
          <MovieActionAreaCard key={movie.imdbID} {...movie} />
        ))}
      </div>
    </>
  );
}
