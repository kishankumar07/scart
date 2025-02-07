import { createContext, useContext, useState } from "react";

interface ProductContextType {
  selectedProducts: number[];
  handleSelect: (id: number, isSelected: boolean) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const handleSelect = (id: number, isSelected: boolean) => {
    setSelectedProducts((prev) =>
      isSelected ? [...prev, id] : prev.filter((pid) => pid !== id)
    );
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, handleSelect }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom Hook for easier usage
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
