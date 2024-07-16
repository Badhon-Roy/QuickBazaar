import { useForm } from "react-hook-form";
import axios from "axios";
import useCategories from "../Components/useCategories";
import Swal from "sweetalert2";

const AddProducts = () => {
    const { categories } = useCategories();

    const colors = [
        "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Black", "White", "Orange", "Purple",
        "Pink", "Brown", "Gray", "Light Blue", "Lime", "Navy", "Teal", "Turquoise",
        "Maroon", "Gold", "Silver", "Indigo", "Violet", "Salmon", "Slate", "Olive",
        "Periwinkle", "Peach", "Plum"
    ];

    const { register, handleSubmit, formState: { errors },reset } = useForm();

    const onSubmit = async (data) => {
        try {
            data.product_name = data.productName;
            data.rating = parseFloat(data.rating);
            data.product_type = data.productType;
            data.product_category = data.category;
            data.product_color = data.color;
            data.product_details = data.productDetails;
            data.price = parseFloat(data.price);
            data.discount = parseInt(data.discount);
            data.quantity = parseInt(data.quantity);
            data.product_image1 = data.image1;
            data.product_image2 = data.image2;
            data.product_image3 = data.image3;

            // If all uploads were successful, construct productInfo object
            const productInfo = {
                category_name: data.product_category,
                images: [
                    data.product_image1,
                    data.product_image2,
                    data.product_image3
                ],
                type: data.product_type,
                price: data.price,
                discount: data.discount,
                quantity: data.quantity,
                rating: data.rating,
                product_color: data.product_color,
                product_name: data.product_name,
                product_details: data.product_details,
                features: [
                    data.product1stFeature,
                    data.product2ndFeature,
                    data.product3rdFeature,
                    data.product4thFeature,
                    data.product5thFeature
                ],
                fit: data.productFit
            };

            axios.post('https://quick-bazaar-com-server.vercel.app/products', productInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product Added Successful 👏",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    reset(); 
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };



    return (
        <div>
            <div>
                <h2 className="md:text-4xl text-2xl font-bold relative text-center mb-8">
                    <span className="text-color">Add </span> Product
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-b-4 border-[#ffb70d] md:w-36 w-24"></span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mb-[50px]">
                    <div className="md:flex gap-16 justify-between">
                        {/* product name */}
                        <div className="flex-1 space-y-2" >
                            <label className="text-xl font-bold">Product Name:</label>
                            <input {...register("productName", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter product name" />
                            {errors.productName && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>


                    <div className="md:flex gap-16 justify-between">
                        {/*1st product image */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">First Image</label><br />
                            <input {...register("image1", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter URL" />
                            {errors.image1 && <span className="text-red-500">This field is required</span>}
                        </div>
                        {/* 2nd product image */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Second Image</label>
                            <input {...register("image2", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter URL" />
                            {errors.image2 && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>

                    <div className="md:flex gap-16 justify-between">
                        {/* 3rd product image */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Third Image</label><br />
                            <input {...register("image3",)} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter URL" />
                            {errors.image3 && <span className="text-red-500">This field is required</span>}
                        </div>
                        {/* color */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Product Color:</label><br />
                            <select
                                id="color"
                                {...register("color", { required: true })}
                            >
                                <option value="">Select a color</option>
                                {colors?.map((color) => (
                                    <option key={color.id} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>
                            {errors.color && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="md:flex gap-16 justify-between">
                        {/* {category} */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Product category:</label> <br />
                            <select
                                id="category"
                                {...register("category", { required: true })}
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category?.category}>
                                        {category?.category}
                                    </option>
                                ))}
                            </select>
                            {errors.productQuantity && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Product Type:</label>
                            <input {...register("productType", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter Type" />
                            {errors.productType && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="md:flex gap-16 justify-between">
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Rating:</label>
                            <input type="number" {...register("rating", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter rating" />
                            {errors.rating && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Product Fit:</label>
                            <input {...register("productFit", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter fit" />
                            {errors.productFit && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>


                    <div className="md:flex gap-16 justify-between">
                        {/* price */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Price:</label>
                            <input type="number" {...register("price", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter price" />
                            {errors.price && <span className="text-red-500">This field is required</span>}
                        </div>
                        {/* discount */}
                        <div>
                            <label className="text-xl font-bold">Discount (%):</label>
                            <input type="number" {...register("discount", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter discount" />
                        </div>
                        {/* quantity */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Quantity:</label>
                            <input type="number" {...register("quantity", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter quantity" />
                            {errors.quantity && <span className="text-red-500">This field is required</span>}
                        </div>

                    </div>


                    <div className="md:flex gap-4 justify-between">
                        {/*1st features */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">1st Feature:</label>
                            <input {...register("product1stFeature", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter feature" />
                            {errors.product1stFeature && <span className="text-red-500">This field is required</span>}
                        </div>
                         {/*2nd features */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">2nd Feature:</label>
                            <input {...register("product2ndFeature", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter feature" />
                            {errors.product2ndFeature && <span className="text-red-500">This field is required</span>}
                        </div>
                         {/*3rd features */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">3rd Feature:</label>
                            <input {...register("product3rdFeature", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter feature" />
                            {errors.product3rdFeature && <span className="text-red-500">This field is required</span>}
                        </div>
                         {/*4th features */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">4th Feature:</label>
                            <input {...register("product4thFeature")} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter feature" />
                            {errors.product4thFeature && <span className="text-red-500">This field is required</span>}
                        </div>
                         {/*5th features */}
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">5th Feature:</label>
                            <input {...register("product5thFeature")} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter feature" />
                            {errors.product5thFeature && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>



                    <label className="text-xl font-bold">Product Details:</label>
                    <textarea rows={5} {...register("productDetails", { required: true })} className="w-full focus:outline-[#ffb70d] px-5 rounded-md py-1 border" placeholder="Enter product details" />
                    {errors.productDetails && <span className="text-red-500">This field is required</span>}

                    <br />

                    <button type="submit" className="btn btn-block bg-[#fcc443] hover:bg-[#ffb70d] border-white text-lg"><span>Add Product</span></button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;