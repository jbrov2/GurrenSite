import { RiShoppingCart2Fill } from "@remixicon/react";

function Shop() {
  return (
    <>
      <section className="shop mt-[80px] xl:mt-[150px] relative z-20">
        <h2 className="h2 text-center mb-8" id="Store">
          SHOP NOW
        </h2>
        <div className="shop_container container mx-auto text-center bg-[#680707] rounded-tr-[120px] rounded-bl-[120px] py-[80px] ">
          <div className="shop_text mb-8 max-w-sm xl:max-w-none mx-auto">
            <h2 className="h2 mb-8">40% Off Sale</h2>
            <button className="btn btn-accent mx-auto ">
              Shop Now <RiShoppingCart2Fill />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
