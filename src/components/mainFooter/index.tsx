export default function MainFooter() {
    const year = new Date().getFullYear();
    
    return(
        <div className="flex bg-color1 justify-center">
            <p className="mt-6 mb-6 text-black font-bold">© Copyright Guilherme Vargas | {year}</p>
        </div>
    )
}