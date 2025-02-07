import { motion } from "framer-motion";
import { useProductContext } from "../context/ProductContext";

const NextButton = () => {
  const { selectedProducts } = useProductContext();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={selectedProducts.length === 0}
      className={`w-full py-3 rounded-lg text-white ${
        selectedProducts.length === 0
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-gray-700 to-[#65ffde]"
      }`}
    >
      NEXT
    </motion.button>
  );
};

export default NextButton;

