import HomeCard from "../components/Home/HomeCard";
import HomeCarousel from "../components/Home/HomeCarousel";

const Home = () => {
  return (
    <div className="w-full h-full py-4 px-10">
      <div className="flex flex-col sm:flex-row gap-10">
        <HomeCard />
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Home;
