import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ searchMovies, clearMovies }) => {

    const [search, setSearch] = useState("");

    const handleOnChange = (e) => {
        setSearch(e.target.value.trim());
    };

    const handleOnClick = () => {
        if (search.length) {
            searchMovies(search);
        }
        setSearch("");
    };

    const clearMovieList = () => {
        clearMovies();
    }
    return (
        <div className="w-full max-w-[521px] p-4 bg-white rounded-lg border border-[#7d623b]">
            <div className="font-semibold text-base">Movie Title</div>
            <div className="w-full max-w-[489px] my-2 py-2 relative border border-[#7d623b]">
                <input type="text" placeholder="search" className="w-full h-full pl-12 outline-none" value={search} onChange={handleOnChange} />
                <span className="w-[18.75px] h-[18.75px] absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <AiOutlineSearch className="w-full h-full" />
                </span>
            </div>
            <div className="flex justify-end gap-x-4">
                <button className="bg-transparent text-[#50B83C] font-semibold text-base" onClick={clearMovieList}>clear</button>
                <button className="text-white bg-[#50B83C] py-2 px-4 font-semibold text-base rounded-[32px]" onClick={handleOnClick}>search</button>
            </div>
        </div>
    );
};

export default Search;