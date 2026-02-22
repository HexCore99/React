import { useState } from "react";
import { useNavigate } from "react-router";
function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full bg-white px-3 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-200 focus:ring-offset-2 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
