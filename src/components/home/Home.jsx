import { useState } from "react";
import Aside from "../aside/Aside";
import Products from "../products/Products";

export default function Home() {
  const [selectedCats, setSelectedCats] = useState([]);
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 py-8 flex flex-col md:flex-row gap-8">
      <Aside onApply={(cats) => setSelectedCats(cats)} />
      <Products activeCategories={selectedCats} />
    </div>
  );
}
