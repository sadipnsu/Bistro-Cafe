import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
import './Home.css';
import Recommend from "./Recommend/Recommend";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Cafe | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <section className="px-0 lg:px-12 py-10">
                <div className="w-full lg:w-11/12 bg_banner mx-auto">
                    <div className="bg-white lg:w-11/12 h-auto lg:h-[300px] space-y-6 rounded-sm lg:mx-auto mx-4 px-6 py-10 text-center ">
                        <h2 className="text-[44px] mt-3">Bistro Cafe</h2>
                        <p className="text-[17px] w-auto lg:w-8/12 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </section>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Recommend></Recommend>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;