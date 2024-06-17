import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaListAlt, FaShoppingBag, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    //todo: get isAdmin value from the database  
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 text-black">
                    {
                        isAdmin ? 
                        <>
                            <li><NavLink to="/dashboard/adminHome">
                                <FaHome></FaHome>
                                Admin Home</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/manageItems">
                                <FaList></FaList>
                                Manage Items</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/bookings">
                                <FaBook></FaBook>
                                Manage Bookings</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/users">
                                <FaUser></FaUser>
                                All Users</NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li><NavLink to="/dashboard/userHome">
                                <FaHome></FaHome>
                                User Home</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/reservation">
                                <FaCalendar></FaCalendar>
                                Reservation</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/cart">
                                <FaShoppingCart></FaShoppingCart>
                                My Cart({cart.length})</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/review">
                                <FaAd></FaAd>
                                Add Review</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/paymentHistory">
                                <FaList></FaList>
                                Payment History</NavLink>
                            </li>
                        </>
                    }
                    {/* Shared nav link */}
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHome></FaHome>
                         Home</NavLink>
                    </li>
                    <li><NavLink to="/menu">
                        <FaListAlt></FaListAlt>
                         Menu</NavLink>
                    </li>
                    <li><NavLink to="/order/salad">
                        <FaShoppingBag></FaShoppingBag>
                         Our Shop</NavLink>
                    </li>
                    <li><NavLink to="/contact">
                        <FaEnvelope></FaEnvelope>
                         Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
