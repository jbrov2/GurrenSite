import aboutPic from "../img/gurrenAbout.png";
import { RiMailFill, RiShoppingCart2Fill } from "@remixicon/react";

function AboutUs() {
  return (
    <>
      <section className="categories mt-[80px] xl:mt-[200px] relative z-20">
        <div className="container mx-auto xl:px-0">
          <h2 className=" h2 text-center mb-8" >
            About-Us
          </h2>
          <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center xl:items-stretch gap-8 xl:gap-[74px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">
                We bring you inspiring and galaxy-bending designs
              </h2>
              <p className="bg-[#680707] p-4 shadow-xl">
                Our team `Tengen Toppa` has made it our top priority to provide
                our customer with jaw-dropping products and visuals that just
                scream,{" "}
                <span className="font-bold">
                  `Just who the hell do you think I am!`
                </span>
              </p>
              <div className="flex items-center justify-center xl:justify-start gap-4">
                <div className="icon bg-[#ECAA27] w-[93px] h-[93px] rounded-full flex justify-center items-center">
                  <RiMailFill />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold contact">
                    contact@email.com
                  </div>
                  <div className="contact">Email Us Anytime</div>
                </div>
              </div>
              <button className="btn btn-primary mt-4 flex items-center gap-2">
                Shop
                <RiShoppingCart2Fill />
              </button>
            </div>
            <div className="order-1 xl:order-none flex-1 flex items-center max-w-[453px] mx-auto xl:max-w-none xl:mx-0">
              <img
                src={aboutPic}
                alt="about pic"
                className="rounded-bl-[120px] rounded-tr-[120px] w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
