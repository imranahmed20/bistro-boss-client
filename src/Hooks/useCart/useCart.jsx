
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const useCart = () => {
    const { user, loading } = useContext(AuthContext)

    const token = localStorage.getItem('access-token')

    // const [axiosSecure] = useAxiosSecure()

    const { isLoading, refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json()
        },
        // queryFn: async () => {
        //     const res = await axiosSecure(`/carts?email=${user?.email}`)
        //     return res.data;
        // },
    })
    return [cart, refetch]


}
export default useCart;