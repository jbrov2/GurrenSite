import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import aboutPic from "../img/gurrenAbout.png";
import { RiMailFill, RiShoppingCart2Fill } from "@remixicon/react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

function AboutUs() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200); // Adjust the breakpoint as needed
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Initial call to set the initial state
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="categories mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto xl:px-0">
        <h2 className="h2 text-center mb-8">About-Us</h2>
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
            {isSmallScreen ? (
              <img
                src={aboutPic}
                alt="about pic"
                className="rounded-bl-[120px] rounded-tr-[120px] w-full h-full object-cover shadow-xl"
              />
            ) : (
              <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: "preserve-3d",
                  transform,
                }}
                className="relative w-full h-full rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
              >
                <div
                  style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute inset-4 rounded-bl-[120px] rounded-tr-[120px] w-full h-full bg-accent shadow-lg"
                >
                  <img
                    src={aboutPic}
                    alt="about pic"
                    className="rounded-bl-[120px] rounded-tr-[120px] w-full h-full object-cover shadow-xl"
                    style={{
                      transform: "translateZ(50px)",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
