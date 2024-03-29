import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";


const useAddCartProducts = () => {
    const { user } = useContext(AuthContext)
    const { data, refetch: cartRefetch , isLoading : addCartLoading } = useQuery({
        queryKey: ['addProducts'],
        queryFn: async () => {
            const res = await axios.get(`https://quick-bazaar-com-server.vercel.app/addProducts?email=${user?.email}`)
            return res.data
        }
    })
    return [data, cartRefetch , addCartLoading]
};

export default useAddCartProducts;