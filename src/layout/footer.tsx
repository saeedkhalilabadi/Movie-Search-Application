import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="absolute flex flex-row items-center justify-center bottom-0 w-full bg-black z-10 h-10">
      <Link
        target="_blank"
        to="https://github.com/saeedkhalilabadi/Movie-Search-Application"
      >
        <span className="text-sm">© saeedKhalilabadi@gmail.com® 2024</span>
      </Link>
    </footer>
  );
}
