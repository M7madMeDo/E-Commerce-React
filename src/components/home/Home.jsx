import { useState } from "react";
import Aside from "../aside/Aside";
import Products from "../products/Products";
import Headerhero from "../headerHero/Headerhero";

export default function Home() {
  const [selectedCats, setSelectedCats] = useState([]);
  return (
    <main className="w-full bg-[#fafafa]">
      <Headerhero />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 py-16 flex flex-col md:flex-row gap-8">
        <Aside onApply={(cats) => setSelectedCats(cats)} />
        <Products activeCategories={selectedCats} />
      </div>
    </main>
  );
}
