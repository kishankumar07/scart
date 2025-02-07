import { IoIosClose } from "react-icons/io";
import { TiArrowLeft } from "react-icons/ti";
import { useProductContext } from "../context/ProductContext";

const Header = ({ total }: { total: number }) => {
  const { selectedProducts } = useProductContext();

  return (
    <div className="relative pb-2">
      {/* Top Section - Back, Title, Close */}
      <div className="flex items-center justify-between px-2 py-3 relative">
        <button className=" text-gray-700 bg-gray-100 size-8 flex justify-center items-center cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out">
          <TiArrowLeft />
        </button>

        {/* Centered Title */}
        <p className="absolute left-1/2 transform -translate-x-1/2 text-lg text-black  tracking-wide font-serif outline-3 outline-[#28ac97]">
          SELECT PRODUCTS
        </p>

        <button className="text-gray-700 bg-gray-100 size-8 flex justify-center items-center cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out">
  <IoIosClose />
</button>


      </div>

      {/* Progress Indicator */}
      <div className="h-1 w-full bg-gray-300">
        <div
          className="h-1 bg-gradient-to-r from-gray-700 to-[#65ffde] transition-all"
          style={{ width: `${(selectedProducts.length / total) * 100}%` }}
        />
      </div>

      {/* Selection Count */}
      <p className="text-gray-600 font-semibold text-sm px-4 mt-6 ">
        {total} PRODUCTS &nbsp; <span className="text-gray-500">{selectedProducts.length} SELECTED</span>
      </p>
    </div>
  );
};

export default Header;
