

const Product = ({ product }) => {
    const {category_name, images, type, price, rating, product_color, product_name,product_details, features, fit} = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-full h-[250px] object-cover" src={images[0]} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>Price : ${price}</p>
                <p>Rating : {rating}</p>
            </div>
        </div>
    );
};

export default Product;