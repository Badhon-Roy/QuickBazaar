
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";
import swal from "sweetalert";
const ShowAddCart = ({ product, cartRefetch }) => {
    const { _id, category_name, images, price, product_name ,discount} = product;
    console.log(product);
    const handleDelete = () => {
        if (!_id) {
            console.error('No product ID provided');
            return;
        }
        axios.delete(`https://quick-bazaar-com-server.vercel.app/addProducts/${_id}`)
            .then(res => {
                if (res.data && res.data.deletedCount > 0) {
                    console.log(`Product with ID ${_id} deleted successfully.`);
                    swal("Cart Delete", "successful", "success");
                    cartRefetch();
                } else {
                    console.log(`Product with ID ${_id} not found or not deleted.`);
                }
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    };
    return (
        <div className="flex gap-2 border border-blue-400 rounded-xl relative mb-10">
            <div className=" border-r border-blue-300">
                <img className="w-[200px] h-[150px] object-cover rounded-l-xl " src={images[0]} alt="" />
            </div>
            <div className=" pr-1">
                <button onClick={handleDelete} className=" btn-primary absolute top-1 right-1 text-2xl text-red-400">
                    <MdOutlineCancel />
                </button>
                {
                    product_name && <h2 className="text-xl mb-1 mt-2">{product_name.slice(0, 30)}...</h2>
                }
                <p>Category : {category_name}</p>
                <p className="TEXT">Price: ${price}</p>
                <p>Discount : {discount}%</p>

            </div>

        </div>
    );
};

export default ShowAddCart;