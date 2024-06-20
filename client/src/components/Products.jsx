import React from "react";
import Movie from "../img/gurrenMovie.jpg";
import Mecha from "../img/mechs.jpg";
import Shirts from "../img/Kamina Shirt.jpg";
import pops from "../img/pops.jpg";
import { RiShoppingBasket2Fill } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Parallax } from "swiper/modules";

function Products() {
  return (
    <section className="product mt-16 z-30 relative">
      <h2 className="h2 text-center">Products</h2>
      <div className="product_bg container mx-auto bg-white rounded-[70px] px-6">
        {/* Slider */}
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            observeParents={true}
            observer={true}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Parallax]}
            className="mySwiper"
          >
            {/* Movie Slide */}
            <SwiperSlide>
              <div className="product_item relative group bg-movie bg-center w-full max-w-[600px] h-[400px] shadow-2xl mt-8 rounded-bl-[120px] rounded-tr-[120px] flex flex-col items-center justify-center p-4 mx-auto">
                {/* Overlay */}
                <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50 rounded-bl-[120px] rounded-tr-[120px]"></div>
                {/* Text Content */}
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                  <h3 className="text-2xl mb-2">Movies</h3>
                  <p className="text-lg flex items-center justify-center cursor-pointer">
                    Buy Now <RiShoppingBasket2Fill className="ml-2" />
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Mecha Slide */}
            <SwiperSlide>
              <div className="product_item relative w-full max-w-[600px] h-[400px] bg-[#680707] shadow-2xl mt-8 rounded-bl-[120px] rounded-tr-[120px] flex flex-col items-center justify-center p-4 mx-auto">
                <div className="flex justify-center">
                  <img
                    src={Mecha}
                    alt="Mecha Pic"
                    className="w-60 h-60 rounded-bl-[120px] rounded-tr-[120px]"
                  />
                </div>
                <div className="text-white mt-4 text-center">
                  <h3 className="text-2xl mb-2">Mecha</h3>
                  <p className="text-lg flex items-center justify-center cursor-pointer">
                    Buy Now <RiShoppingBasket2Fill className="ml-2" />
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Shirts Slide */}
            <SwiperSlide>
              <div className="product_item relative w-full max-w-[600px] h-[400px] bg-[#680707] shadow-2xl mt-8 rounded-bl-[120px] rounded-tr-[120px] flex flex-col items-center justify-center p-4 mx-auto">
                <div className="flex justify-center">
                  <img
                    src={Shirts}
                    alt="Shirt Pic"
                    className="w-60 h-60 rounded-bl-[120px] rounded-tr-[120px]"
                  />
                </div>
                <div className="text-white mt-4 text-center">
                  <h3 className="text-2xl mb-2">Shirts</h3>
                  <p className="text-lg flex items-center justify-center cursor-pointer">
                    Buy Now <RiShoppingBasket2Fill className="ml-2" />
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Pops Slide */}
            <SwiperSlide>
              <div className="product_item relative w-full max-w-[600px] h-[400px] bg-[#680707] shadow-2xl mt-8 rounded-bl-[120px] rounded-tr-[120px] flex flex-col items-center justify-center p-4 mx-auto">
                <div className="flex justify-center">
                  <img
                    src={pops}
                    alt="Pops Pic"
                    className="w-60 h-60 rounded-bl-[120px] rounded-tr-[120px]"
                  />
                </div>
                <div className="text-white mt-4 text-center">
                  <h3 className="text-2xl mb-2">Pops</h3>
                  <p className="text-lg flex items-center justify-center cursor-pointer">
                    Buy Now <RiShoppingBasket2Fill className="ml-2" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Products;
