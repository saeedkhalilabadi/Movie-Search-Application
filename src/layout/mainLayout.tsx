import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function MainLayout() {
  return (
    <div className="relative bg-yellow-600 w-full min-h-[100vh] pb-14">
      <Header />
      <section className="w-full max-w-[1580px] mx-auto">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
}
