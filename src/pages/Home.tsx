import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import GlossyCard from "../components/GlossyCard";
import HomeCard from "../components/Home/HomeCard";

const Home = () => {
  return (
    <div className="w-full h-full pt-4 px-10">
      <div className="flex flex-row">
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
