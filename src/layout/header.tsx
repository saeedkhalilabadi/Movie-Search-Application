import { useEffect, useRef } from "react";
import { Logo } from "../components/logo";
import { Button, ButtonGroup } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const listenScrollEvent = () => {
    if (window.scrollY < 73 && headerRef.current) {
      headerRef.current.style.backgroundColor = "unset";
    } else if (window.scrollY > 70 && headerRef.current) {
      headerRef.current.style.backgroundColor = "rgb(255 246 86 / 59%)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 flex flex-row items-center  justify-between px-3 h-12 z-10 transition-all delay-100 "
    >
      <Logo />
      <ButtonGroup variant="text" aria-label="Loading button group">
        <Link to={"/favorite"}>
          <Button>
            <FavoriteIcon />
          </Button>
        </Link>
      </ButtonGroup>
    </header>
  );
}
