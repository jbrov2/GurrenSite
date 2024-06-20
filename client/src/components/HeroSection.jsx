import { RiShoppingCart2Fill } from "@remixicon/react";

function HeroSection() {
  return (
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
  );
}

export default HeroSection;
