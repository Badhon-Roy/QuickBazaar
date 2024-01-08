import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";


const useAddCartProducts = () => {
    const {user} = useContext(AuthContext)
    const { data, refetch : cartRefetch } = useQuery({
        queryKey: ['addProducts'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/addProducts?email=${user?.email}`)
            return res.data
        }
    })
    return [data , cartRefetch]
};

export default useAddCartProducts;