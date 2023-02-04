import { useFetch } from "../../hooks/useFetch";
import { iMovies } from "../../types/MoviesType";


export default function Movies() {

    const { data: movies } = useFetch<iMovies[]>('https://api.themoviedb.org/3/movie/popular?api_key=a897642f12e0358a2aaf4d47cacad777&language=en-US&page=1');
    const image_path = 'https://image.tmdb.org/t/p/w500';

    console.log(movies)

    return (

        <section>
            <div className="">
                <h2>Top 20 best rated movies!</h2>
                <input type="SEARCH" name="" id="" />
            </div>
            <div>
                <ul className="flex flex-col text-center">
                    {movies?.map(response => {
                        return (
                            <li className="flex flex-col justify-center border border-black mt-5 mb-5" key={response.id}>
                                <h3 className="text-2xl mt-3 mb-3">{response.title}</h3>
                                <img src={`${image_path}${response.poster_path}`} alt="" />
                                <p>{response.overview}</p>
                            </li>
                    )
                    })}
                </ul>
            </div>
        </section>
    )
}