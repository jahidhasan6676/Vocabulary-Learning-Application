

import Banner from "../components/Banner";
import Faqs from "../components/Faqs";
import HomeAbout from "../components/HomeAbout";
import HomeSuccess from "../components/HomeSuccess";
import ReviewCard from "../components/ReviewCard";


const Home = () => {
    return (
        <div className="py-14">
           
            <Banner></Banner>
            <Faqs></Faqs>
           <HomeAbout></HomeAbout>
           <HomeSuccess></HomeSuccess>
           <ReviewCard></ReviewCard>
        </div>
    );
};

export default Home;