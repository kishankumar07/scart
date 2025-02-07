import { motion } from "framer-motion";
import { useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { MdDone } from "react-icons/md";

const ProductCard = ({ product }) => {
  const { handleSelect, selectedProducts } = useProductContext();
  const isSelected = selectedProducts.includes(product.id);

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={`relative p-2  rounded-lg cursor-pointer `}
      onClick={() => handleSelect(product.id, !isSelected)}
    >
      <img src={product.image} alt={product.title} className="w-full  object-cover rounded-md" />
      <p className="text-sm mt-2">{product.title}</p>
      <p className="text-md font-semibold">£{product.price}</p>

      {isSelected ? (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center  "
    style={{ backgroundColor: isSelected ? "#3dc8b2" : "transparent", borderColor: "#333" }}
  >
    <span className="text-white font-black">
      <MdDone />
    </span>
  </motion.div>
) : (
  <div className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center  bg-gray-400 outline-0 border-0 "></div>
)}

    </motion.div>
  );
};

export default ProductCard;
