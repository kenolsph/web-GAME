import 'boxicons/css/boxicons.min.css';

const Arena = () => {
    return (

        //ccontainer
        <div className="md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60">

            <div className="relative z-10 pt-6 text-center">
                <h1 className="text-5xl font-bold tracking-widest mb-28"
                    style={{ textShadow: "0 0 10px rgba( 255, 255, 255, 0.7), 0 0 20px rgba(167, 139 250, 0.5)" }}
                >
                    Arena
                </h1>
            </div>
            {/* main ccontainer */}

            <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

                {/* left column of screen 1/3  */}

                <div className="md:col-span-1 space-y-4 md:space-y-6">

                    {/* card1 */}

                    <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105 ">

                        {/* background image and btn */}

                        <div className="absolute h-full w-full">
                            <img src="/bento-card1.png" alt="card 1" />

                            <button className="absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
                                <i class='bx bx-store-alt'></i> NFT STORE
                            </button>

                        </div>

                    </div>

                    {/* card 2 */}

                    <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105 ">

                        <video className="w-full h-full object-cover " autoPlay loop muted playsInline src="/bento-card2.mp4"></video>

                    </div>

                </div>

                {/* right column */}

                <div className="md:col-span-2 spcace-y-4 md:space-y-6">

                    {/* top row 3 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">

                        {/* card 1 */}
                        <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">

                            <video className="w-full h-full object-cover " autoPlay loop muted playsInline src="/bento-card3.mp4"></video>

                            <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl">Scoriox</h1>
                        </div>

                        {/* card 2 */}
                        <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">

                            <video className="w-full h-full object-cover " autoPlay loop muted playsInline src="/bento-card4.mp4"></video>

                            <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl">Floralynx</h1>
                        </div>

                        {/* card 3 */}
                        <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">

                            <video className="w-full h-full object-cover " autoPlay loop muted playsInline src="/bento-card5.mp4"></video>

                            <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl">Titanor</h1>
                        </div>
                    </div>

                    {/* card 6 rapper  */}

                    <div className="relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02]">
                        <img src="/bento-card5.png" alt="card 6" />

                        <button className="absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
                        <i class='bx bx-link-external'></i> Buy Now
                        </button>

                     </div>

                </div>

            </div>

        </div>
    )
}

export default Arena