import heroImg from "../img/Simon.png";
import glasses from "../img/team_gurren_lagann_logo_vector_by_iklone_da73gb2-fullview.png";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSection from "../components/HeroSection";
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
          {/*Hero Section */}
          <HeroSection />
          {/*Categories */}
          <hr className="mx-auto bg-white w-1/2" />
          <section id="categories" className="p-6 my-12">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 ">
              Categories
            </h2>
          </section>
          {/**Temp div */}
          <div className="h-[3000px]"></div>
        </main>
      </div>
    </>
  );
}

export default Home;
