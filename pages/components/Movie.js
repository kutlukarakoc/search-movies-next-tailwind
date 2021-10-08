
const Movie = ({ movie }) => {

    return (
        <li className="font-normal text-base rounded cursor-pointer">
            {movie.title}
        </li>
    );
};

export default Movie;