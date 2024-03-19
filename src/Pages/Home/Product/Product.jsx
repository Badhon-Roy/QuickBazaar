import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const { _id, category_name, images, price, rating, product_name } = product;
    return (
        <Link to={`/products/${category_name}/${_id}`}>
            <div className="border rounded-lg p-2 hover:border-blue-400 hover:border w-full md:h-[420px] h-[350px] bg-base-100 shadow-xl">
                <figure><img className="w-full md:h-[200px] h-[150px] object-cover border rounded-lg" src={images[0]} alt="Shoes" /></figure>
                <div className="p-2">
                    {
                        product_name && <h2 className="md:text-xl font-medium mb-2">{product_name.slice(0, 30)}..</h2>
                    }
                    <p className="text-blue-600 font-semibold">Price: ${price}</p>
                    <p>Rating : {rating}</p>
                </div>
            </div>
        </Link>
    );
};

export default Product;