import { Link, useLocation } from "react-router-dom";

export default function SingleMovie() {
    const image_path = 'https://image.tmdb.org/t/p/w500';
    let { state } = useLocation();

    return (
        <div className="flex flex-col bg-black text-white text-center justify-center items-center">
            <h1 className="bg-red-600 mt-10 mb-10 text-2xl md:text-5xl" >{state.title}</h1>
            <img className="w-128 h-128" src={`${image_path}${state.poster_path}`} alt="" />
            <div className="mt-5 mb-5">
                <h2>Rate: {state.vote_average}</h2>
                <h2>Release: {state.release_date}</h2>
            </div>
            <p className="mt-10 mb-10 md:w-128 md:mr-auto md:ml-auto">{state.overview}</p>
            <Link to="/"><button className="bg-red-600 w-36 mr-auto ml-auto mb-10 mt-10">Back</button></Link>
        </div>
    )
}