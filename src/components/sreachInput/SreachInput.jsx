import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router";
import { FiSearch, FiX } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import debounce from "debounce";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const searchProductsFetch = async (value) => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${value}&limit=5`,
    );
    if (!res.ok) throw new Error("Failed to get the products");
    return res.json();
  };

  const updateDebouncedSearch = useMemo(() => {
    return debounce((value) => {
      setDebouncedValue(value);
    }, 500);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["searchData", debouncedValue],
    queryFn: () => searchProductsFetch(debouncedValue),
    enabled: !!debouncedValue.trim(),
  });

  const results = data?.products || [];

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    setIsOpen(true);
    updateDebouncedSearch(val);
  };

  const clearSearch = () => {
    setSearch("");
    setDebouncedValue("");
    setIsOpen(false);
  };

  useEffect(() => {
    const clickOut = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOut);
    return () => document.removeEventListener("mousedown", clickOut);
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto z-50 selection:bg-black selection:text-white"
      ref={searchRef}
    >
      <div className="relative flex items-center w-full">
        <FiSearch className="absolute left-4 text-gray-400 text-lg" />

        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          onFocus={() => search.trim().length > 0 && setIsOpen(true)}
          placeholder="Search for products..."
          className="w-full pl-11 pr-10 py-3 bg-gray-50/80 border border-gray-100 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-400"
        />

        {search && (
          <button
            onClick={clearSearch}
            className="absolute right-3 p-1.5 text-gray-400 hover:text-gray-900 transition-colors bg-white rounded-full hover:bg-gray-100 border border-gray-50 shadow-sm"
          >
            <FiX className="text-sm" />
          </button>
        )}
      </div>

      {isOpen && search.trim() !== "" && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col max-h-100">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <span className="w-6 h-6 border-2 border-gray-100 border-t-gray-900 rounded-full animate-spin"></span>
            </div>
          ) : results.length > 0 ? (
            <>
              <div className="overflow-y-auto p-2 scrollbar-hide">
                {results.map((pro) => (
                  <Link
                    key={pro.id}
                    to={`/singleProduct/${pro.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center p-1.5 shrink-0 group-hover:border-gray-200 transition-colors">
                      <img
                        src={pro.thumbnail}
                        alt={pro.title}
                        className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-0.5">
                        {pro.category}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-800 truncate group-hover:text-black transition-colors">
                        {pro.title}
                      </h4>
                    </div>

                    <div className="text-sm font-black text-gray-900 tracking-tight">
                      ${pro.price.toFixed(2)}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="p-3 border-t border-gray-50 bg-gray-50/50">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 text-xs font-bold text-gray-900 hover:text-white bg-white hover:bg-gray-950 border border-gray-200 hover:border-gray-950 rounded-lg transition-all active:scale-[0.98]"
                >
                  View all results for "{debouncedValue}"
                </button>
              </div>
            </>
          ) : (
            <div className="p-6 text-center text-sm font-medium text-gray-500">
              No products found for "
              <span className="text-black font-bold">{debouncedValue}</span>"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
