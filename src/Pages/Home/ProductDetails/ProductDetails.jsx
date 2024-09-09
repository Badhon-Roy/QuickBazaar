import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useQuery } from "@tanstack/react-query";
import Review from "../Review/Review";
import useAddCartProducts from "../../../Components/useAddCartProducts";
import Footer from "../../../Components/Footer"

const ProductDetails = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const [product, setProduct] = useState({})
    const [, cartRefetch] = useAddCartProducts()

    useEffect(() => {
        axios.get(`https://quick-bazaar-com-server.vercel.app/products/${id}`)
            .then(res => setProduct(res.data))
    }, [id])
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['comment'],
        queryFn: async () => {
            const res = await axios.get(`https://quick-bazaar-com-server.vercel.app/comment?product_id=${id}`)
            return res.data
        }
    })
    const [randomReviews, setRandomReviews] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const shuffledData = shuffle([...data]);
            const selectedReviews = shuffledData.slice(0, 6);
            setRandomReviews(selectedReviews);
        }
    }, [data]);

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    };



    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const currentDateObject = new Date();
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = currentDateObject.toLocaleDateString('en-US', options);

        setCurrentDate(formattedDate);
        const formattedTime = currentDateObject.toLocaleTimeString();
        setCurrentTime(`${formattedTime}`);
    }, [currentDate]);
    const { category_name, images, type, price, rating, product_color, product_name, product_details = ' ', features, fit, discount } = product;

    const calculateDiscountedPrice = () => {
        const totalPrice = parseFloat(price);
        const discountPercentage = parseFloat(discount);
        const discountedAmount = totalPrice * (discountPercentage / 100);
        return (totalPrice - discountedAmount).toFixed(2);
    };

    const [comment, setComment] = useState('');

    const handleComment = (event) => {
        event.preventDefault();
        const wordCount = comment.trim().split(/\s+/).length;
        if (wordCount > 100) {
            alert('Maximum 15 words allowed.');
            return;
        }
        const commentData = {
            comment,
            product_id: id,
            email: user?.email,
            photo: user?.photoURL,
            name: user?.displayName,
            date: currentDate,
            time: currentTime

        }
        axios.post('https://quick-bazaar-com-server.vercel.app/comment', commentData)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Add Your Comment", "thank you 🤗", "success")
                    refetch();
                }
            })
        setComment('');
    };

    const handleChange = (e) => {
        const currentWordCount = e.target.value.trim().split(/\s+/).length;
        if (currentWordCount <= 100) {
            setComment(e.target.value);
        }
    };

    const wordCount = comment.trim().split(/\s+/).length;


    // product add to cart
    const handleAddCart = () => {
        const productData = {
            category_name: product?.category_name,
            images: product?.images,
            type: product?.type,
            price: product?.price,
            rating: product?.rating,
            product_color: product?.product_color,
            product_name: product?.product_name,
            product_details: product?.product_details,
            features: product?.features,
            fit: product?.fit,
            email: user?.email,
            discount: product?.discount,
            quantity: product?.discount
        };

        axios.post('https://quick-bazaar-com-server.vercel.app/addProducts', productData)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Product Added", "successful 👏", "success");
                    cartRefetch();
                } else {
                    swal("Product Not Added", "an error occurred", "error");
                }
            })
            .catch(error => {
                console.error("Error while sending the request:", error);
                swal("Error", "Failed to add product. Please try again later.", "error");
            });
    };


    if (isLoading) {
        <div className="flex justify-center items-center h-[50vh]">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }




    return (
        <div>
            <div className="max-w-[1400px] mx-auto md:px-8 px-4 mt-16">
                <div className="md:flex justify-between gap-8">
                    <div className="flex-1">
                        {images && images.length > 0 ? (
                            <>
                                <a target="_blank" rel="noopener noreferrer" href={images[0]}>
                                    <img className="w-full md:h-[500px] h-[350px] object-cover rounded-2xl hover:border-[#ffb70d] hover:p-2 hover:border" src={images[0]} alt="" />
                                </a>
                                {images.length > 1 && (
                                    <div className="flex justify-between gap-8 my-8">
                                        <div className="flex-1">
                                            <a target="_blank" rel="noopener noreferrer" href={images[1]}>
                                                <img className="w-full h-[200px] md:h-[300px] object-cover rounded-xl hover:border-[#ffb70d] hover:border" src={images[1]} alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-1">
                                            <a target="_blank" rel="noopener noreferrer" href={images[2]}>
                                                {images.length > 2 && <img className="w-full h-[200px] md:h-[300px] rounded-xl object-cover hover:border-[#ffb70d] hover:border" src={images[2]} alt="" />}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <p>No images available</p>
                        )}
                        <h3 className="text-3xl font-medium mt-16">Product Details</h3>
                        <p className="my-5">{product_details}</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-4xl font-semibold">{product_name}</h2>
                        <p className="capitalize my-4 text-xl">Category : {category_name}</p>
                        <div className="flex items-center gap-16 my-4">
                            <p className="capitalize text-xl">Type : {type}</p>
                            <p className="text-xl" >Color : <span className="font-bold capitalize">{product_color}</span></p>
                        </div>

                        <div className='flex gap-10'>
                            <del className="border-2 px-2 p-1 rounded-lg text-[#ea0e68] font-semibold">Price: ${price}</del>
                            <span className="border-2 px-2 p-1 rounded-lg TEXT font-semibold">Price: $  {calculateDiscountedPrice()}</span>
                        </div>
                        <div className="flex items-center gap-1 my-4">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="mt-1 text-xl">{rating}</p>
                        </div>
                        <button onClick={handleAddCart} className="BTN my-4 w-full"><span>Add to cart</span></button>

                        <div className="text-black collapse collapse-plus bg-base-200 cursor-pointer">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Description
                            </div>
                            <div className="collapse-content">
                                <p>{product_details ? product_details.slice(0, 200) : ''}..</p>
                            </div>
                        </div>
                        <div className="text-black collapse collapse-plus bg-base-200 mt-4">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Product Features
                            </div>
                            <div className="collapse-content">
                                <ul className="space-y-3">
                                    {
                                        features?.map(feature => <li key={feature} className="flex items-center gap-2"><GoDotFill className="text-xs"></GoDotFill>{feature}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="text-black collapse collapse-plus bg-base-200 mt-4">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Fit
                            </div>
                            <div className="collapse-content">
                                <p>{fit}</p>
                            </div>
                        </div>
                        <div className="my-8 grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div className="border p-4 rounded-lg">
                                <div className="flex items-center justify-center gap-5">
                                    <img className="w-[100px]" src="https://cdn-icons-png.flaticon.com/512/3375/3375305.png" alt="" />
                                    <div>
                                        <h3 className="text-xl font-medium mb-1">Free shipping</h3>
                                        <p>On orders over $200.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-4 rounded-lg">
                                <div className="flex items-center justify-center gap-5">
                                    <img className="w-[100px]" src="https://cdn-icons-png.flaticon.com/512/9183/9183512.png" alt="" />
                                    <div>
                                        <h3 className="text-xl font-medium mb-1">Very easy to return</h3>
                                        <p>Just phone number.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-4 rounded-lg">
                                <div className="flex items-center justify-center gap-5">
                                    <img className="w-[80px]" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/nationwide-5370141-4485349.png" alt="" />
                                    <div>
                                        <h3 className="text-xl font-medium mb-3">Nationwide Delivery</h3>
                                        <p>Fast delivery nationwide.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-4 rounded-lg">
                                <div className="flex items-center justify-center gap-5">
                                    <img className="w-[100px]" src="https://cdn4.iconfinder.com/data/icons/logistics-and-delivery-vol-2/64/easy-returns-512.png" alt="" />
                                    <div>
                                        <h3 className="text-xl font-medium mb-3">Refunds policy</h3>
                                        <p>60 days return for any reason</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-medium mb-4">Add Your Review</h2>
                            <form onSubmit={handleComment}>
                                <textarea
                                    className="textarea text-black textarea-warning w-full max-h-[150px] px-6 py-3"
                                    name="comment"
                                    placeholder={wordCount >= 100 ? 'Maximum 15 words reached' : 'Review'}
                                    value={comment}
                                    onChange={handleChange}
                                ></textarea>
                                <div className="text-sm text-gray-400 mb-2">
                                    {`${wordCount} words / 100 words`}
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-block btn-warning"
                                    value="Add"
                                    disabled={wordCount < 2}
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="divider divider-warning mt-8 mb-16"></div>
                {
                    data?.length > 0 && <div>
                        <h2 className="text-3xl font-medium">{data?.length} Product Review</h2>
                        <div className="grid lg:grid-cols-2 gap-8 my-10">
                            {randomReviews?.map(review => (
                                <Review key={review._id} review={review} />
                            ))}
                        </div>
                    </div>
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;