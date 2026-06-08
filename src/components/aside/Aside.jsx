import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
export default function Aside({ onApply }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMenuOpen, setisMenuOpen] = useState(true);
  const handleCheck = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };
  const CategoriesData = async () => {
    const res = await fetch("https://dummyjson.com/products/category-list");
    const data = await res.json();
    return data;
  };
  const { data: categorys = [], isLoading } = useQuery({
    queryKey: ["categorys"],
    queryFn: CategoriesData,
  });
  useEffect(() => {
    setisMenuOpen(false);
  }, []);

  return (
    <aside className=" w-full md:w-65 shrink-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <span
          className="cursor-pointer md:hidden"
          onClick={() => setisMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdArrowUp /> : <IoMdArrowDown />}
        </span>
      </div>

      <div className={isMenuOpen ? "block" : "hidden md:block   "}>
        <div className="flex items-center justify-center  bg-[#F5F5F5] rounded-lg p-2 gap-2 mb-4">
          <CiSearch className="text-2xl text-[#989898]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full text-black"
          />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loader border-4 border-gray-200 border-t-black rounded-full w-12 h-12 animate-spin"></span>
          </div>
        ) : (
          <ul className="space-y-3 mb-8">
            {categorys.map((cat, i) => (
              <li key={i} className="flex items-center gap-2">
                <input
                  onChange={() => handleCheck(cat)}
                  type="checkbox"
                  id={cat}
                  checked={selectedCategories.includes(cat)}
                  className="w-4 h-4 accent-black"
                />
                <label htmlFor={cat} className="capitalize text-sm">
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => onApply(selectedCategories)}
          className="w-full bg-black text-white py-3 rounded-lg font-medium cursor-pointer"
        >
          Apply
        </button>
      </div>
    </aside>
  );
}
