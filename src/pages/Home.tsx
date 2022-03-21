import CommunityBox from "../components/Home/CommunityBox";
import HomeCard from "../components/Home/BannerCard";
import HomeCarousel from "../components/Home/HomeCarousel";

const Home = () => {
  return (
    <div className="w-full h-full p-10 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row gap-10">
        <HomeCard />
        <div className="flex flex-col w-full h-full gap-10">
          <HomeCarousel />
          <CommunityBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
