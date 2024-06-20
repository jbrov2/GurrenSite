import glasses from "../img/team_gurren_lagann_logo_vector_by_iklone_da73gb2-fullview.png";
import { RiShoppingBasket2Fill, RiMenu4Fill } from "@remixicon/react";
import { useState, useEffect } from "react";

function NavBar() {
  const [toggleBtn, setToggleBtn] = useState(false);

  function handleNavBar() {
    setToggleBtn(!toggleBtn);
  }

  useEffect(() => {
    function handleResize() {
      // Reset toggleBtn state to false on larger viewports
      if (window.innerWidth >= 1024) {
        setToggleBtn(false);
      }
    }

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 h-[90px] shadow-xl z-40 bg-white">
        <div className="container mx-auto flex justify-between items-center h-full">
          <a href="#">
            <img src={glasses} alt="" className="h-16" />
          </a>
          <nav className="lg:flex lg:flex-row lg:items-center lg:space-x-4">
            {/* For Mobile users */}
            <div className="cursor-pointer lg:hidden" onClick={handleNavBar}>
              <RiMenu4Fill className="icon size-10" />
            </div>
            <ul
              className={`lg:flex lg:flex-row lg:gap-4 ${
                toggleBtn
                  ? "flex flex-col gap-4 absolute bg-white w-full left-0 top-[90px] transition-all duration-300"
                  : "hidden"
              }`}
            >
              <li className=" flex justify-center hover:text-[#680707] duration-300 cursor-pointer">
                <a href="About-Us"></a>About-Us
              </li>
              <li className="flex justify-center hover:text-[#680707]  duration-300 cursor-pointer">Products</li>
              <li className="flex justify-center hover:text-[#680707] duration-300 items-center cursor-pointer">
                <span>Store</span>
                <RiShoppingBasket2Fill className="ml-2" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
