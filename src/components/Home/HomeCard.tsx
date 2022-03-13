import { Link } from "react-router-dom";
import Button from "../common/Button";
import GlossyCard from "../GlossyCard";

const HomeCard = () => {
  return (
    <GlossyCard>
      <div className="px-4 py-10 flex flex-col items-center gap-10">
        <p className="font-black text-2xl">
          읽었던 책이나 읽고 싶은 책을 기록해봐요
        </p>

        <Link to="/book">
          <Button
            className="bg-green-400 text-white font-lg text-lg h-[50px] w-[200px] cursor-pointer"
            onClick={() => {}}
          >
            책 둘러보러 가기
          </Button>
        </Link>
      </div>
    </GlossyCard>
  );
};

export default HomeCard;
