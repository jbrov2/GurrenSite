import heroImg from "../img/Simon.png";
import glasses from "../img/team_gurren_lagann_logo_vector_by_iklone_da73gb2-fullview.png";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiShoppingCart2Fill } from "@remixicon/react";
import ScrollReveal from "scrollreveal";
import NavBar from "../components/Navbar";

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
          <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
            <div className="overlay absolute top-0 left-0 w-full h-full xl:rounded-bl-[290px] bg-black opacity-50 z-10"></div>
            <div className="container mx-auto h-full flex items-center justify-center xl:justify-start relative z-20">
              <div className="hero__text w-full max-w-[567px] flex flex-col items-center xl:items-start text-center xl:text-left">
                <h1 className="h1 mb-8 ">Tengen Toppa</h1>
                <p className="mb-8 font-bold">
                  The store that will remind you to <br />
                  `Believe in the me that believes in you.`{" "}
                </p>
                <button className="btn btn-primary mx-auto xl:mx-0">
                  Start Shopping
                  <RiShoppingCart2Fill className="text-accent" />
                </button>
              </div>
            </div>
          </section>
          {/**Temp div */}
          <div className="h-[3000px]"></div>
        </main>
      </div>
    </>
  );
}

export default Home;
