import Banner from "../../components/banner";
import MainFooter from "../../components/mainFooter";
import Movies from "../../components/movies";
import Navbar from "../../components/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Movies />
            <MainFooter />
        </div>
    )
}