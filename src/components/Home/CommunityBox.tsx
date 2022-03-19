import { Link } from "react-router-dom";
import { path } from "../../routes/path";
import GlossyCard from "../GlossyCard";

const CommunityBox = () => {
  return (
    <GlossyCard>
      <div className="w-full h-full flex flex-col gap-1">
        <p className="font-black text-2xl">빠른 메뉴</p>
        <div className="flex flex-row w-full gap-2">
          <Link
            to={path.COMMUNITY}
            className="rounded-2xl bg-white font-black px-4 py-2"
          >
            독서 모임 찾기
          </Link>
          <Link
            to={path.BOOKSEARCH}
            className="rounded-2xl bg-white font-black px-4 py-2"
          >
            책 검색
          </Link>
          <Link
            to={`${path.SHELF}/all`}
            className="rounded-2xl bg-white font-black px-4 py-2"
          >
            내 서재
          </Link>
        </div>
      </div>
    </GlossyCard>
  );
};

export default CommunityBox;
