import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="h-32 bg-black">
            <div className="text-white flex justify-around font-nav">
                <img className="w-24 mt-4" src="\img\logo.png" alt="" />
                <nav>
                    <ul className="flex mt-12 font-bold text-2xl">
                        <li className="ml-6 mr-6 lg:ml-28 lg:mr-28"><Link to="/">Home</Link></li>
                        <li className="ml-6 mr-6 lg:ml-28 lg:mr-28"><a href="https://portfolio-react-vite.vercel.app/" target="_blank">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}