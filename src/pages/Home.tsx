import CommunityBox from "../components/Home/CommunityBox";
import HomeCard from "../components/Home/HomeCard";
import HomeCarousel from "../components/Home/HomeCarousel";

const Home = () => {
  return (
    <div className="w-full h-full py-4 px-10 flex justify-center">
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
