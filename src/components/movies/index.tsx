import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { iMovies } from "../../types/MoviesType";
import { SetStateAction, useEffect, useState } from 'react'


export default function Movies() {

    const [titlePage, setTitlePage] = useState('TOP 20 best rated movies!')
    const [httpLink, setHttpLink] = useState("https://api.themoviedb.org/3/movie/popular?api_key=a897642f12e0358a2aaf4d47cacad777&language=en-US&page=1");
    const { data: movies } = useFetch<iMovies[]>(httpLink);

    const image_path = 'https://image.tmdb.org/t/p/w500';
    const [stringToSearch, setStringToSearch] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setStringToSearch(event.target.value);
    };

    function urlToSearch() {
        setHttpLink(`https://api.themoviedb.org/3/search/movie?api_key=a897642f12e0358a2aaf4d47cacad777&language=en-US&query=${stringToSearch.replace(" ", "%20")}&page=1&include_adult=false`);
        setTitlePage('Your finded results: ')
    }


    return (

        <section>
            <div className="mt-5 mb-5 flex flex-col text-center">
                <h2 className="font-titles mr-10">Do you want to search your favorit movies?</h2>
                <div className="flex justify-center">
                    <textarea className="bg-amber-100 shadow-sm shadow-black border-solid border-2 border-grey-light" rows={1} cols={33} placeholder="Name of movie" onChange={handleChange} value={stringToSearch} id=""></textarea>
                    <button className="bg-red-600 font-bold text-white rounded-lg" onClick={urlToSearch}>Search!</button>
                </div>
            </div>
            <div className="text-center text-2xl mt-10 font-bold">
                <h2 className="font-titles from-stone-900">{titlePage}</h2>
            </div>
            <div className="flex flex-col">
                <ul className="flex flex-col text-center md:grid md:grid-cols-2 lg:grid-cols-3">
                    {movies?.map(response => {
                        const resumeOverview = response.overview.substring(0, 150)

                        return (
                            <li className="flex flex-col justify-center bg-black text-white mt-5 mb-5 md:mr-3 md:ml-3 rounded-3xl" key={response.id}>
                                <h3 className="h-16 w-auto  font-titles text-2xl mt-3 mb-3">{response.title}</h3>
                                <img className="h-128 md:w-128 mr-auto ml-auto" src={`${image_path}${response.poster_path}`} alt="" />
                                <p className="w-auto h-20 mt-3 mb-3">{resumeOverview}...</p>
                                <Link to="/moviepage" state={response}><button className="w-full bg-red-600 mt-2 mb-5">Read More!</button></Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}