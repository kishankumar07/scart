import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import NextButton from "../components/NextButton";
import { ProductProvider } from "../context/ProductContext";

const sampleProducts = [
  { id: 1, title: "Black Shirt", price: 250, image: "/black-shirt.png" },
  { id: 2, title: "Leather Jacket", price: 250, image: "/leather-jacket.png" },
  { id: 3, title: "Hoodie", price: 250, image: "/hoodie.png" },
  { id: 4, title: "Gaming Shirt", price: 250, image: "/gaming-shirt.png" },
];

const ProductSelection = () => {
  return (
    <ProductProvider>
      <div className="min-h-screen flex justify-center items-center bg-gray-800">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-gray-200 outline-2 outline-gray-300">
          {/* Header */}
          <Header total={sampleProducts.length} />

          {/* Product Grid */}
          <div className="p-4">
            <ProductGrid products={sampleProducts} />
          </div>

          {/* Next Button */}
          <div className="p-4">
            <NextButton />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
};


export default ProductSelection;
