import { useFetch } from "../../hooks/useFetch";
import { iMovies } from "../../types/MoviesType";


export default function Movies() {

    const { data: movies } = useFetch<iMovies[]>('https://api.themoviedb.org/3/movie/popular?api_key=a897642f12e0358a2aaf4d47cacad777&language=en-US&page=1');
    const image_path = 'https://image.tmdb.org/t/p/w500';

    console.log(movies)

    return (

        <section>
            <div className="text-center text-2xl mt-10 font-bold">
                <h2>Top 20 best rated movies!</h2>
                <input type="SEARCH" name="" id="" />
            </div>
            <div className="flex flex-col">
                <ul className="flex flex-col text-center md:grid md:grid-cols-2 lg:grid-cols-3">
                    {movies?.map(response => {
                        const resumeOverview = response.overview.substring(0,150)

                        return (
                            <li className="flex flex-col justify-center bg-black text-white mt-5 mb-5 md:mr-3 md:ml-3" key={response.id}>
                                <h3 className="h-16 w-auto  font-titles text-2xl mt-3 mb-3">{response.title}</h3>
                                <img className="md:h-128 md:w-128 mr-auto ml-auto" src={`${image_path}${response.poster_path}`} alt="" />
                                <p className="w-auto h-20 mt-3 mb-3">{resumeOverview}...</p>
                                <button className="w-full bg-red-600 mt-2 mb-5">Read More!</button>
                                
                            </li>
                    )
                    })}
                </ul>
            </div>
        </section>
    )
}