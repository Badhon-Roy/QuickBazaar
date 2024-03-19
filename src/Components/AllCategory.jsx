import { Link } from "react-router-dom";
import useCategories from "./useCategories";
import Footer from "./Footer";


const AllCategory = () => {
    const { categories } = useCategories();
    return (
        <div>
            <img className="h-[300px] w-full object-cover" src="https://images.inc.com/uploaded_files/image/1920x1080/full-shopping-cart-1940x900_36101.jpg" alt="" />
            <div className="max-w-[1400px] mx-auto px-8 mb-16">
                <h2 className="md:text-4xl text-2xl text-center py-8">All Category {categories.length}</h2>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
                    {categories.map(category => (
                        <div key={category._id}>
                            <Link to={`/products/${category?.category}`}>
                                <div className="shadow-lg rounded-xl border-2 border-[#363f4c] p-2 bg-[#20293e] h-[350px]">
                                    <figure>
                                        <img className="border-[#333c49] w-full md:h-[250px] h-[250px] object-cover rounded-t-xl" src={category?.image} alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="text-center text-xl capitalize">{category?.category}</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllCategory;