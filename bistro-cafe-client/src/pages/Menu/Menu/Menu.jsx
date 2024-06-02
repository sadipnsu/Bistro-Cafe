/* eslint-disable react-hooks/rules-of-hooks */
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCatergory from '../MenuCategory/MenuCatergory';

const menu = () => {
    const [menu] = useMenu();
    //const popular = menu.filter(item => item.category === "popular");
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro Cafe | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* Offered Menu Items */}
            <MenuCatergory items={offered}></MenuCatergory>
            {/* desert menu items */}
            <MenuCatergory items={desserts} title="dessert" img={dessertImg}></MenuCatergory>
            <MenuCatergory items={pizza} title="pizza" img={pizzaImg}></MenuCatergory>
            <MenuCatergory items={salad} title="salad" img={saladImg}></MenuCatergory>
            <MenuCatergory items={soup} title="soup" img={soupImg}></MenuCatergory>
        </div>
    );
};

export default menu;