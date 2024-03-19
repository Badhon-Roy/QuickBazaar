import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const { _id, category_name, images, price, rating, product_name } = product;
    return (
        <Link to={`/products/${category_name}/${_id}`}>
            <div className="border-2 border-[#333c49] p-2 bg-[#20293e] hover:border-[#fdc816] hover:border w-full md:h-[380px] h-[350px] shadow-xl rounded">
                <figure><img className="w-full md:h-[200px] h-[150px] object-cover border rounded-t" src={images[0]} alt="Shoes" /></figure>
                <div className="p-2">
                    {
                        product_name && <h2 className="md:text-xl font-medium mb-2">{product_name.slice(0, 30)}..</h2>
                    }
                    <p className="text-[#fdc816] font-semibold">Price: ${price}</p>
                    <p>Rating : {rating}</p>
                </div>
            </div>
        </Link>
    );
};

export default Product;