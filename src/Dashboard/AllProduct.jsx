import { Link } from "react-router-dom";

const AllProduct = ({ product }) => {
    const { _id, category_name, images, type, price, discount, quantity, product_name } = product;
    return (
        <div className="border hover:shadow-lg border-[#ffb70d] p-2 rounded flex items-center gap-4">
            <div className="w-[15%]">
                <img className="w-[100px] h-[80px] object-cover border-2 rounded-lg shadow-lg" src={images[0]} alt="" />
            </div>
            <div className="w-[45%]">
                {
                    product_name && <h2 className="text-[18px] font-medium">{product_name.slice(0, 30)}...</h2>
                }
                <h2>Category: {category_name}</h2>
                <h2>Type : {type}</h2>
            </div>


            <div className="w-[30%]">
                <p className="TEXT font-bold">Price : {price}tk</p>
                <p>Discount : {discount}%</p>
                <p>Quantity : {quantity}</p>
            </div>
            <div className="w-[30%] flex items-center justify-center gap-4">
                <Link to={`/products/${category_name}/${_id}`}>
                    <img className="w-[40px] border rounded cursor-pointer hover:shadow-lg hover:border-[#ffb70d]" src="https://cdn-icons-png.flaticon.com/512/5721/5721043.png" alt="" />
                </Link>
                <img className="w-[40px] border rounded cursor-pointer hover:shadow-lg hover:border-[#ffb70d]" src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1605/faysalfarhan160500782/56061843-update-refresh-icon-yellow-square-button.jpg" alt="" />
                <img className="w-[40px] border rounded cursor-pointer hover:shadow-lg hover:border-[#ffb70d]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnGQ0hFVLPjusTGBAm0Q3k7-XaTCm9mUYaw&s" alt="" />

            </div>
        </div>
    );
};

export default AllProduct;