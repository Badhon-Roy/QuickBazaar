import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const {_id, category_name, images, type, price, rating, product_color, product_name, product_details, features, fit } = product;
    return (
        <Link to={`/products/${category_name}/${_id}`}>
            <div className=" hover:border-blue-400 hover:border w-full h-[450px] bg-base-100 shadow-xl">
                <figure><img className="w-full h-[250px] object-cover" src={images[0]} alt="Shoes" /></figure>
                <div className="card-body">
                   {
                    product_name &&  <h2 className="card-title">{product_name.slice(0,20)}..</h2>
                   }
                    <p className="text-blue-600 font-semibold">Price: ${price}</p>
                    <p>Rating : {rating}</p>
                </div>
            </div>
        </Link>
    );
};

export default Product;