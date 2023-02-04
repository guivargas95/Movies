import Banner from "../../components/banner";
import Movies from "../../components/movies";
import Navbar from "../../components/navbar";

export default function Home(){
    return(
        <div>
            <Navbar />
            <Banner />
            <Movies />
        </div>
    )
}