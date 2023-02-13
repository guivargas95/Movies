import Banner from "../../components/banner";
import Navbar from "../../components/navbar";
import MainFooter from "../../components/mainFooter";
import SingleMovie from "../../components/movies/singleMovie";


export default function MoviePage() {

    return (
        <div className="">
            <Navbar />
            <Banner />
            <SingleMovie />
            <MainFooter />
        </div>
    )
}