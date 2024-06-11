import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = food =>{
        if(user && user.email){
            // to do : send cart item to database
            console.log(user.email, food);
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} added to the your cart`,
                    showConfirmButton: false,
                    timer: 1500
                    });
                }
            })
        
        }
        else{
            Swal.fire({
                title: "You're not Logged In!",
                text: "Please log in to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  //send the user to login page
                    navigate('/login', {state: {from: location}});
                }
              });
        }
    }
    return (
        
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button 
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">
                    Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;