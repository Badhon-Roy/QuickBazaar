
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
            <h2 className="text-4xl font-bold my-8">Choose Your Category {categories.length}</h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    categories.map(category => <Link key={category._id} to={`/products/${category?.category}`}><div  className="card bg-base-100 shadow-xl">
                        <figure><img src={category?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2>{category?.category}</h2>
                        </div>
                    </div></Link>)
                }
            </div>
        </div>
    );
};

export default CategorySlider;