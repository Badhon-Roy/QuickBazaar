
const Banner = () => {
    return (
        <div className="bg-[#e3ffe6]">
            <div className="md:flex flex-row-reverse justify-between items-center gap-8 max-w-[1400px] mx-auto px-8 py-16">
                <div>
                    <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right-3.010fb6aa.png&w=1080&q=75" alt="" />
                </div>
                <div className="lg:text-7xl md:text-5xl text-3xl font-semibold">
                    <h1>Exclusive collection for everyone</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;