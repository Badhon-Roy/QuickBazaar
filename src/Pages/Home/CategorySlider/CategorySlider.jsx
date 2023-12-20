
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CategorySlider = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="max-w-[1400px] mx-auto px-8 py-16">
            <h2 className="text-4xl font-bold my-8">Choose Your Category</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    categories.map(category => <Link key={category._id} to={`/products/${category?.category}`}><div  className=" bg-base-100 shadow-xl">
                        <figure><img className="w-full md:h-[200px] h-[250px] object-cover" src={category?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{category?.category}</h2>
                        </div>
                    </div></Link>)
                }
            </div>
        </div>
    );
};

export default CategorySlider;