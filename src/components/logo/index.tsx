import { Box } from "@mui/material";
import IconThemoviedatabase from "../icons/logo";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to={"/"}>
      <section className="flex flex-row gap-2 items-center text-black">
        <IconThemoviedatabase width={40} height={40} />
        <span className="text-2xl">MovieSearch</span>
      </section>
    </Link>
  );
}
