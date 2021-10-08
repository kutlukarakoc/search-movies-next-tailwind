import Movie from "./Movie";

const MovieList = ({ movies, searched }) => {

    return (
        <div className="w-full max-w-[521px] p-4 mt-8 bg-white border border-[#7d623b] rounded-lg">
            {
                movies.length ?
                    (
                        <>
                            <div className="pb-2 font-semibold text-base">Results for "{searched}"</div>
                            <div className="pb-4 font-normal text-xs">click on a movie title to learn more about it</div>
                            <ul className="list-none flex flex-col gap-y-3">
                                {
                                    movies.slice(0, 5).map((movie) => {
                                        return (
                                            <Movie movie={movie} key={movie.imdbID} />
                                        )
                                    })
                                }
                            </ul>
                        </>
                    )
                    : <div className="font-semibold text-base">Search results will appear here</div>
            }
        </div>
    );
};

export default MovieList;