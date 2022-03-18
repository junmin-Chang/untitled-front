import { Link } from "react-router-dom";
import Button from "../common/Button";
import GlossyCard from "../GlossyCard";
import { FcReadingEbook } from "react-icons/fc";
const HomeCard = () => {
  return (
    <GlossyCard>
      <div className="px-4 py-10 flex flex-col items-center gap-10">
        <p className="font-black text-2xl">Bookers</p>
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <span className="h-6 flex items-center sm:h-7 gap-4">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="font-black">
                  책을 검색하고 읽었던 책들을 등록해보세요.
                </p>
              </span>
            </li>
            <li>
              <span className="h-6 flex items-center sm:h-7 gap-4">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="font-black">
                  혹은 같이 읽고 싶은 책을 선정하여 독서모임을 꾸려보세요
                </p>
              </span>
            </li>
          </ul>
        </div>
        <FcReadingEbook size={150} />

        <Link to="/book">
          <Button
            className="
            bg-green-400 
            text-white
            font-black 
            text-lg 
            h-[50px]
            w-[200px]
            cursor-pointer
            hover:bg-green-600
            "
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
