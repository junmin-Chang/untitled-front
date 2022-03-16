import { Link } from "react-router-dom";
import GlossyCard from "../GlossyCard";

const CommunityBox = () => {
  return (
    <GlossyCard>
      <div className="h-full">
        <Link to="/community">독서 모임 찾기</Link>
      </div>
    </GlossyCard>
  );
};

export default CommunityBox;
