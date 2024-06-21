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
      duration: 3000,
      delay: 600,
      // reset: true,
    });

    // To reveal specific items
    //hero
    Scroll.reveal(".hero__text", { origin: "top" });
    //products
    Scroll.reveal(".product_bg", { origin: "bottom" });
    Scroll.reveal(".product_title", { origin: "bottom", delay: 1000 });

    //about
    Scroll.reveal(".about_text", { origin: "left" });
    Scroll.reveal(".about_img", { origin: "right", delay: 800 });
    //shop
    Scroll.reveal(".shop_container", { origin: "bottom" });
    Scroll.reveal(".shop_text");
    Scroll.reveal(".shop_header");

    //footer
    Scroll.reveal(".footer_item", { distance: "100px", interval: 100 });
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

          {/* <div className="h-[3000px]"></div> */}
        </main>
      </div>
    </>
  );
}

export default Home;
