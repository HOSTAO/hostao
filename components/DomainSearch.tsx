"use client";
import { useState } from "react";

const DEFAULT_TLDS = [".com", ".in", ".bh", ".ae", ".shop", ".org", ".online", ".net"];

interface DomainSearchProps {
  tlds?: string[];
  defaultTld?: string;
}

export default function DomainSearch({ tlds, defaultTld }: DomainSearchProps = {}) {
  const activeTlds = tlds && tlds.length > 0 ? tlds : DEFAULT_TLDS;
  const [query, setQuery] = useState("");
  const [selectedTld, setSelectedTld] = useState(defaultTld ?? activeTlds[0]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      // Strip any existing extension from query, then append selected TLD
      const base = query.trim().replace(/\.[a-z]+$/, "");
      window.open(`https://my.hostao.com/cart.php?a=add&domain=register&query=${encodeURIComponent(base + selectedTld)}`, "_blank");
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto mb-4">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter domain name"
          className="flex-1 px-5 py-3.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 text-sm font-medium outline-none focus:border-[#0056A7] focus:ring-2 focus:ring-[#0056A7]/20 transition-all"
        />
        <button type="submit"
          className="bg-[#0056A7] text-white font-bold px-8 py-3.5 rounded-lg hover:bg-[#004085] transition-colors text-sm whitespace-nowrap">
          Search
        </button>
      </form>
      <div className="flex flex-wrap justify-center gap-2">
        {activeTlds.map(tld => (
          <button
            key={tld}
            type="button"
            onClick={() => setSelectedTld(tld)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-colors cursor-pointer ${
              selectedTld === tld
                ? "bg-[#0056A7] text-white border-[#0056A7]"
                : "bg-white border-gray-200 text-[#0056A7] hover:bg-blue-50"
            }`}
          >
            {tld}
          </button>
        ))}
      </div>
    </div>
  );
}
