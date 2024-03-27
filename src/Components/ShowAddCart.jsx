
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";
import swal from "sweetalert";
const ShowAddCart = ({ product ,cartRefetch }) => {
    const { _id, category_name, images, price, product_name } = product;
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
        <div className="flex items-center gap-2 border border-blue-400 rounded-xl relative">
            <div className="w-1/3 border-r border-blue-300">
                <img className="h-[150px] w-full object-cover rounded-l-xl" src={images[0]} alt="" />
            </div>
            <div className="w-2/3 pr-1">
                <button onClick={handleDelete} className=" btn-primary absolute top-1 right-1 text-2xl text-red-400">
                    <MdOutlineCancel />
                </button>
                {
                    product_name && <h2 className="text-xl mb-1">{product_name.slice(0, 47)}...</h2>
                }
                <p>Category : {category_name}</p>
                <p>Price: ${price}</p>

            </div>
        </div>
    );
};

export default ShowAddCart;