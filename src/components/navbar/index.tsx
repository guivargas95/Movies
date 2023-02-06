export default function Navbar() {
    return (
        <div className="h-32 bg-black">
            <div className="text-white flex justify-around font-nav font-bold text-lg">
                <img className="w-24 mt-4" src="\img\logo.png" alt="" />
                <nav>
                    <ul className="flex mt-12">
                        <li className="ml-6 mr-6">Home</li>
                        <li className="ml-6 mr-6">Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}