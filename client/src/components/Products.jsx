
import { RiShoppingBasket2Fill } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Parallax } from "swiper/modules";

function Products() {
  return (
    <section className="product mt-16 z-30 relative" >
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
                  <p className="text-lg flex hover:text-[#28ff85] duration-300 items-center justify-center cursor-pointer">
                    Buy Now <RiShoppingBasket2Fill className="ml-2" />
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Mecha Slide */}
            <SwiperSlide>
              <div className="product_item relative group bg-mecha bg-center bg-contain bg-no-repeat w-full max-w-[600px] h-[400px] shadow-2xl mt-8 rounded-bl-[120px] rounded-tr-[120px] flex flex-col items-center justify-center p-4 mx-auto">
                <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50 rounded-bl-[120px] rounded-tr-[120px]">
                </div>
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                  <h3 className="text-2xl mb-2">Mecha</h3>
                  <p className="text-lg flex items-center hover:text-[#28ff85] duration-300 justify-center cursor-pointer ">
                    Buy Now <RiShoppingBasket2Fill className="ml-2" />
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Shirts Slide */}
            <SwiperSlide>
              <div className="product_item relative group bg-shirts bg-center bg-cover w-full max-w-[600px] h-[400px]  shadow-2xl mt-8 rounded-bl-[120px] rounded-tr-[120px] flex flex-col items-center justify-center p-4 mx-auto">
                <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50 rounded-bl-[120px] rounded-tr-[120px]">
                </div>
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                  <h3 className="text-2xl mb-2">Shirts</h3>
                  <p className="text-lg hover:text-[#28ff85] duration-300 flex items-center justify-center cursor-pointer">
                    Buy Now <RiShoppingBasket2Fill className="ml-2" />
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Pops Slide */}
            <SwiperSlide>
              <div className="product_item relative group bg-pops bg-center bg-cover w-full max-w-[600px] h-[400px]  shadow-2xl mt-8 rounded-bl-[120px] rounded-tr-[120px] flex flex-col items-center justify-center p-4 mx-auto">
                <div className="overlay absolute top-0 left-0  w-full h-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50 rounded-bl-[120px] rounded-tr-[120px]">
                </div>
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                  <h3 className="text-2xl mb-2">Pops</h3>
                  <p className="text-lg hover:text-[#28ff85] duration-300 flex items-center justify-center cursor-pointer">
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
