import { useLocation } from "react-router-dom";
import Banner from "../../components/banner";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";


export default function MoviePage() {

    const image_path = 'https://image.tmdb.org/t/p/w500';
    let { state } = useLocation();
    console.log(state)

    return (
        <div className="">
            <Navbar />
            <Banner />

            <div className="flex flex-col bg-black text-white text-center justify-center">
                <h1 className="bg-red-600 mt-10 mb-10 text-5xl" >{state.title}</h1>
                <img className=" md:w-1/3 md:mr-auto md:ml-auto " src={`${image_path}${state.poster_path}`} alt="" />
                <div>
                    <h2>Rate: {state.vote_average}</h2>
                    <h2>Release: {state.release_date}</h2>
                </div>
                <p className="mt-10 mb-10 md:w-128 md:mr-auto md:ml-auto">{state.overview}</p>
                <Link to="/"><button className="bg-red-600 w-36 mr-auto ml-auto mb-10 mt-10">Back</button></Link>
            </div>
        </div>
    )
}