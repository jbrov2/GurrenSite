import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMetaFill,
  RiTwitterXFill,
} from "@remixicon/react";
import glasses from "../img/team_gurren_lagann_logo_vector_by_iklone_da73gb2-fullview.png";

function Footer() {
  return (
    <>
      <footer className="footer  mt-[80px] xl:mt-[400px] relative z-20">
        <div className="container mx-auto px-0">
          <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
            <div className="footer_item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left ">
              <a
                href="#"
                className="flex  justify-center xl:justify-start mb-8 items-center"
              >
                <img src={glasses} alt="" className="h-16 mr-4" />
                <h2>Tengen Toppa</h2>
              </a>
              <p className="mb-8 text-xl text-[#680707]">
                The store that will remind you to `Belive in the me that
                believes in you.`
              </p>
              <ul className="flex justify-center mb-8 gap-[54px] xl:justify-start">
                <li>
                  <a href="">
                    <RiMetaFill />
                  </a>
                </li>
                <li>
                  <a href="">
                    <RiTwitterXFill />
                  </a>
                </li>
                <li>
                  <a href="">
                    <RiInstagramFill />
                  </a>
                </li>
                <li>
                  <a href="">
                    <RiLinkedinBoxFill />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end ">
              <div className="footer_item">
                <h3 className="h3 mb-3">Pages</h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Products</a>
                  </li>
                  <li>
                    <a href="">Store</a>
                  </li>
                </ul>
              </div>

              <div className="footer_item">
                <h3 className="h3 mb-3">Products</h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="">Movies</a>
                  </li>
                  <li>
                    <a href="">Mechas</a>
                  </li>
                  <li>
                    <a href="">Pops</a>
                  </li>
                  <li>
                    <a href="">Shirts</a>
                  </li>
                </ul>
              </div>
              <div className="footer_item">
                <h3 className="h3 mb-3 max-w-[260px] mx-auto xl:mx-0">
                  Contact
                </h3>
                <div className="flex flex-col gap-6 text-[20px]">
                  <p className="text-[#680707]">
                    78 MadeUP Avenue, Newark, New Jersey 08937
                  </p>
                  <p className="text-[#680707]">contact@email.com</p>
                  <p className="text-[#680707]">(123) 456- 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="footer_copyright text-center text-lg py-10 bg-white xl:border-t text-[#680707]">
          Copyright &copy; TengenToppa 2024. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
