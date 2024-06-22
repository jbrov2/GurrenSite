import { RiShoppingCart2Fill } from "@remixicon/react";
// import Simon from "../img/Simon.png";
import Simon2 from "../img/crispy.png";

function HeroSection() {
  return (
    <section className="hero h-[640px] xl:h-[840px] xl:rounded-bl-[290px] relative z-20">
      <div className="overlay absolute top-0 left-0 w-full h-full xl:rounded-bl-[290px] bg-black opacity-50 z-10"></div>
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start relative z-20">
        <div className="hero__text w-full max-w-[567px] flex flex-col items-center xl:items-start text-center xl:text-left relative z-30">
          <h1 className="h1 mb-8">Tengen Toppa</h1>
          <p className="mb-8 font-bold">
            The store that will remind you to <br />
            `Believe in the me that believes in you.`{" "}
          </p>
          <button className="btn btn-primary mx-auto xl:mx-0 flex items-center">
            Start Shopping
            <RiShoppingCart2Fill className="text-accent ml-2" />
          </button>
        </div>
      </div>
      <img
        src={Simon2}
        alt="Simon"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 xl:rounded-bl-[290px]"
      />
    </section>
  );
}

export default HeroSection;
