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
  const filteredCat = categorys.filter((cat) =>
    cat.toLowerCase().includes(serach.toLowerCase()),
  );
  return (
    <aside className="w-full md:w-64 shrink-0 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm h-fit">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-900">Categories</h2>
        <button
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="md:hidden text-xl p-1 hover:bg-gray-50 rounded-xl transition-colors border-none bg-transparent flex items-center justify-center"
        >
          {isMenuOpen ? <IoMdArrowUp /> : <IoMdArrowDown />}
        </button>
      </div>

      <div className={isMenuOpen ? "block" : "hidden md:block"}>
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl p-2.5 gap-2 mb-4 focus-within:border-black transition-colors">
          <CiSearch className="text-xl text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search categories"
            onChange={(e) => setSearch(e.target.value)}
            value={serach}
            className="bg-transparent outline-none text-sm w-full text-black placeholder-gray-400"
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <span className="border-4 border-gray-200 border-t-black rounded-full w-8 h-8 animate-spin"></span>
          </div>
        ) : (
          <div className="max-h-64 overflow-y-auto pr-1 mb-6">
            {filteredCat.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-4">
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
                      className="w-4 h-4 accent-black rounded  shrink-0"
                    />
                    <label className="capitalize text-sm text-gray-600 group-hover:text-black transition-colors select-none w-full">
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
          className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] shadow-sm"
        >
          Apply
        </button>
      </div>
    </aside>
  );
}
