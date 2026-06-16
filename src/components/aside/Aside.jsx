import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

export default function Aside({ onApply }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMenuOpen, setisMenuOpen] = useState(true);
  const [serach, setSearch] = useState("");

  const handleCheck = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const CategoriesData = async () => {
    const res = await fetch("https://dummyjson.com/products/category-list");
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  };

  const { data: categorys = [], isLoading } = useQuery({
    queryKey: ["categorys"],
    queryFn: CategoriesData,
  });

  useEffect(() => {
    setisMenuOpen(false);
  }, []);

  const filteredCat = categorys?.filter((cat) =>
    cat.toLowerCase().includes(serach.toLowerCase()),
  );

  return (
    <aside className="w-full md:w-64 shrink-0 bg-neutral-bg p-5 rounded-2xl border border-neutral-light shadow-sm h-fit">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-neutral-dark">Categories</h2>
        <button
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="md:hidden text-xl p-1 hover:bg-neutral-light rounded-xl transition-colors border-none bg-transparent flex items-center justify-center text-neutral-dark"
        >
          {isMenuOpen ? <IoMdArrowUp /> : <IoMdArrowDown />}
        </button>
      </div>

      <div className={isMenuOpen ? "block" : "hidden md:block"}>
        <div className="flex items-center bg-neutral-light border border-neutral-light rounded-xl p-2.5 gap-2 mb-4 focus-within:border-primary-500 transition-colors">
          <CiSearch className="text-xl text-neutral-dark/40 shrink-0" />
          <input
            type="text"
            placeholder="Search categories"
            onChange={(e) => setSearch(e.target.value)}
            value={serach}
            className="bg-transparent outline-none text-sm w-full text-neutral-dark placeholder-neutral-dark/40"
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <span className="border-4 border-neutral-light border-t-primary-500 rounded-full w-8 h-8 animate-spin"></span>
          </div>
        ) : (
          <div className="max-h-64 overflow-y-auto pr-1 mb-6">
            {filteredCat.length === 0 ? (
              <p className="text-xs text-neutral-dark/50 text-center py-4">
                No categories found
              </p>
            ) : (
              <ul className="space-y-3">
                {filteredCat.map((cat) => (
                  <li key={cat} className="flex items-center gap-3 group">
                    <input
                      onChange={() => handleCheck(cat)}
                      type="checkbox"
                      id={cat}
                      checked={selectedCategories.includes(cat)}
                      className="w-4 h-4 accent-primary-500 rounded cursor-pointer shrink-0"
                    />
                    <label
                      htmlFor={cat}
                      className="capitalize text-sm text-neutral-dark/80 group-hover:text-primary-500 transition-colors select-none w-full cursor-pointer"
                    >
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <button
          onClick={() => onApply(selectedCategories)}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] shadow-sm"
        >
          Apply
        </button>
      </div>
    </aside>
  );
}
