

export default function Parthners() {
    return (

    <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10" /> 

        <div className="overflow-hidden w-full  py-12">
            <h2 className="md:text-5xl text-3xl text-gray-500 py-8 font-bold tracking-widest text-center">Współpracyjemy z </h2>
            <div className="flex w-max animate-scroll gap-16">
                {/* Repeat logos to simulate loop */}
                <img src="./generalna.png" className="h-20 object-contain grayscale" />
                <img src="./svantek.png" className="h-20 object-contain grayscale" />
                <img src="./polsl.png" className="h-20 object-contain grayscale" />
                <img src="./generalna.png" className="h-20 object-contain grayscale" />
                <img src="./svantek.png" className="h-20 object-contain grayscale" />
                <img src="./polsl.png" className="h-20 object-contain grayscale" />
                <img src="./generalna.png" className="h-20 object-contain grayscale" />
                <img src="./svantek.png" className="h-20 object-contain grayscale" />
                <img src="./polsl.png" className="h-20 object-contain grayscale" />
            </div>
        </div>
    </div>
        

    )
}

