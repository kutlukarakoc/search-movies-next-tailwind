import Head from 'next/head';
import Search from './components/Search';
import MovieList from "./components/MovieList";
import {useState} from "react";
import axios from "axios";


export default function Home({result, getStaticProps}) {

  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState();

  const searchMovies = async (search) => {
    const result = await axios.get("http://www.omdbapi.com/?apikey=127687e9&search&type=movie", {
      params: {s: search}
    });

    setMovies(result.data.Search);
    setSearched(search);
  };

  const clearMovies = () => {
    setMovies("");
  }
  return (
    <div className="md:h-full mt-12 md:mt-0 w-full px-4 flex flex-col justify-center items-start">
      <Head>
        <title>Madde 22</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-black font-medium text-[32px]">OMDb API</div>
        <div className="text-black mt-2 font-normal text-base mb-4 whitespace-nowrap">The Open Movie Database 🍿</div>
        <Search searchMovies={searchMovies} clearMovies={clearMovies} />
        <MovieList movies={movies} searched={searched}/>
      </div>
    </div>
  )
}
