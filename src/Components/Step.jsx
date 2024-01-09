

const Step = () => {
    return (
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-4 grid-cols-2 gap-8 my-32 px-5">
            <div className="flex flex-col justify-center items-center text-center">
                <img  className="w-[150px]" src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW1img.5d05ab6a.png&w=256&q=75" alt="" />
                <p className="bg-[#fee2e2] px-2 rounded-full text-sm text-[#b86361] mt-8 mb-4 ">Step 1</p>
                <h3 className="font-medium text-[18px] mb-2">Filter & Discover</h3>
                <p className="lg:px-5">Smart filtering and suggestions make it easy to find</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <img className="w-[150px]" src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2img.4553ec6b.png&w=256&q=75" alt="" />
                <p className="bg-[#e0e7ff] px-2 rounded-full text-sm text-[#6b85d7] mt-8 mb-4">Step 2</p>
                <h3 className="font-medium text-[18px] mb-2">Add to bag</h3>
                <p className="lg:px-5">Easily select the correct items and add them to the cart</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <img className="w-[150px]" src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW3img.63a41796.png&w=256&q=75" alt="" />
                <p className="bg-[#fee2e2] px-2 rounded-full text-sm text-[#b86361] mt-8 mb-4">Step 3</p>
                <h3 className="font-medium text-[18px] mb-2">Fast shipping</h3>
                <p className="lg:px-5">The carrier will confirm and ship quickly to you</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <img className="w-[150px]" src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW4img.10d25987.png&w=256&q=75" alt="" />
                <p className="bg-[#fee2e2] px-2 rounded-full text-sm text-[#b86361] mt-8 mb-4">Step 4</p>
                <h3 className="font-medium text-[18px] mb-2">Enjoy the product</h3>
                <p className="lg:px-5">Have fun and enjoy your 5-star quality products</p>
            </div>
        </div>
    );
};

export default Step;