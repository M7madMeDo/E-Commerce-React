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
        isOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOut);
    return () => document.removeEventListener("mousedown", clickOut);
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto z-50 selection:bg-primary-500 selection:text-white"
      ref={searchRef}
    >
      <div className="relative flex items-center w-full">
        <FiSearch className="absolute left-4 text-neutral-dark/40 text-lg" />

        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          onFocus={() => search.trim().length > 0 && setIsOpen(true)}
          placeholder="Search for products..."
          className="w-full pl-11 pr-10 py-3 bg-neutral-light/30 border border-neutral-light rounded-xl text-sm font-medium text-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-bg transition-all placeholder:text-neutral-dark/40"
        />

        {search && (
          <button
            onClick={clearSearch}
            className="absolute right-3 p-1.5 text-neutral-dark/40 hover:text-neutral-dark transition-colors bg-neutral-bg rounded-full hover:bg-neutral-light border border-neutral-light/50 shadow-sm"
          >
            <FiX className="text-sm" />
          </button>
        )}
      </div>

      {isOpen && search.trim() !== "" && (
        <div className="absolute top-full left-0 w-full mt-2 bg-neutral-bg border border-neutral-light/80 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col max-h-100">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <span className="w-6 h-6 border-2 border-neutral-light border-t-primary-500 rounded-full animate-spin"></span>
            </div>
          ) : results.length > 0 ? (
            <>
              <div className="overflow-y-auto p-2 scrollbar-hide">
                {results.map((pro) => (
                  <Link
                    key={pro.id}
                    to={`/singleProduct/${pro.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-3 hover:bg-neutral-light/50 rounded-xl transition-colors group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-neutral-light/30 rounded-lg border border-neutral-light flex items-center justify-center p-1.5 shrink-0 group-hover:border-neutral-light/80 transition-colors">
                      <img
                        src={pro.thumbnail}
                        alt={pro.title}
                        className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="text-[10px] font-extrabold text-neutral-dark/40 uppercase tracking-widest mb-0.5">
                        {pro.category}
                      </span>
                      <h4 className="text-sm font-semibold text-neutral-dark truncate group-hover:text-primary-500 transition-colors">
                        {pro.title}
                      </h4>
                    </div>

                    <div className="text-sm font-black text-neutral-dark tracking-tight">
                      ${pro.price.toFixed(2)}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="p-3 border-t border-neutral-light/30 bg-neutral-light/10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 text-xs font-bold text-neutral-dark hover:text-white bg-neutral-bg hover:bg-primary-500 border border-neutral-light hover:border-primary-500 rounded-lg transition-all active:scale-[0.98]"
                >
                  View all results for "{debouncedValue}"
                </button>
              </div>
            </>
          ) : (
            <div className="p-6 text-center text-sm font-medium text-neutral-dark/50">
              No products found for "
              <span className="text-neutral-dark font-bold">
                {debouncedValue}
              </span>
              "
            </div>
          )}
        </div>
      )}
    </div>
  );
}
