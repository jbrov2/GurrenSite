import { useEffect } from "react";
import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/Navbar";
import ScrollReveal from "scrollreveal";
import Shop from "../components/Shop";
import Footer from "../components/footer";
function Home() {
  useEffect(() => {
    // Initializing ScrollReveal
    const Scroll = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 100,
      delay: 200,
      reset: true,
    });

    // To reveal specific items
    Scroll.reveal("#reveal", { interval: 200 });
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        {/*Header */}
        <NavBar />
        {/* page wrapper */}
        <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
          {/* grid */}
          <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></div>
          <HeroSection />
          <hr className="mx-auto bg-slate-900 w-1/2 mt-40" id="products" />
          <Products />
          <hr className="mx-auto bg-slate-900 w-1/2 mt-40" id="About-Us" />
          <AboutUs />
          <hr className="mx-auto bg-slate-900 w-1/2 mt-40" />
          {/*Store */}
          <Shop />
          <Footer />
          {/**Temp div */}

          <div className="h-[3000px]"></div>
        </main>
      </div>
    </>
  );
}

export default Home;
