import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item text-white bg-fixed pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-50">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Voluptas animi esse doloribus, obcaecati repudiandae nostrum ratione dicta tenetur autem eligendi neque,
                       quasi quo ullam quas ipsa sunt? Voluptatem architecto repellat natus nemo nobis reiciendis, exercitationem,
                       deleniti quod quibusdam minima assumenda quos vel officiis modi id. Veritatis perspiciatis amet qui deleniti.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>   
                </div>
            </div>
        </div>
    );
};

export default Featured;