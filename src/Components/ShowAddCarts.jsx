import ShowAddCart from "./ShowAddCart";
import useAddCartProducts from "./useAddCartProducts";
import Footer from "../Components/Footer"

const ShowAddCarts = () => {
    const [data, cartRefetch, addCartLoading] = useAddCartProducts();

    if (addCartLoading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                Loading............
            </div>
        );
    }

    const totalPrice = data?.reduce((total, item) => total + item.price, 0);
    const subTotalPrice = totalPrice?.toFixed(2);
    console.log(data);

    return (
        <div>
            <div className="max-w-[1400px] mx-auto px-5 my-16">
                {data?.length > 0 ? (
                    <>
                        <div className="md:flex justify-around">
                            <h2 className="text-4xl font-medium text-center mb-6">ALL Cart Add : {data.length}</h2>
                            <h2 className="text-4xl font-medium text-center mb-6">Total Price : ${subTotalPrice}</h2>
                        </div>
                        <div className="flex justify-between gap-10">
                            <div className="w-2/3">
                                {data.map((product) => (
                                    <ShowAddCart key={product?._id} cartRefetch={cartRefetch} product={product}></ShowAddCart>
                                ))}
                            </div>
                            <div className="w-1/3">
                                <h2>
                                    Cash on Delivery Available

                                    7 Days Replacement Policy

                                    100% Money Back Guarantee

                                    Purchase & Earn Points

                                    100% Original Product</h2>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-2xl text-center">No products added.</div>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowAddCarts;
