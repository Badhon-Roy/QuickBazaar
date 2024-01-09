import Step from "../../../Components/Step";
import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategorySlider></CategorySlider>
            <Step></Step>
            <div className="bg-[#fefce8] my-16 px-5">
                <div className="max-w-[1400px] mx-auto md:flex justify-between items-center gap-10 md:relative">
                    <div className="flex-1 flex justify-center">
                        <img className="md:absolute -top-20 md:left-2 lg:h-[570px] md:h-[500px] " src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromo2.b3b05f98.png&w=1080&q=75" alt="" />
                    </div>
                    <div className="flex-1 lg:py-32 md:py-[92px] py-16 relative md:text-left text-center">
                        <div className="flex md:justify-start justify-center">
                            <img className="w-[150px]" src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" />
                        </div>
                        <p className="w-[20px] h-[20px] bg-[#8fd966] rounded-full absolute top-20 right-20"></p>
                        <h2 className="lg:text-6xl md:text-5xl text-3xl font-semibold my-6">Special offer <br /> in kids products</h2>
                        <p>Fashion is a form of self-expression and autonomy at a particular period and place.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;