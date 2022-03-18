import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../features/post/postSlice";
import { Viewer } from "@toast-ui/react-editor";
import format from "date-fns/format";

const CommunityInfo = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery(id as string);
  if (isLoading) return <p>Loading..</p>;
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full h-full max-w-xl mx-auto my-0 px-6 py-0">
        <p className="mt-0 text-4xl font-black py-8">{post.title}</p>
        <p className="mt-4 font-black">작성자 {post.userId}</p>
        <p className="mt-4">
          작성 날짜 {format(new Date(post.createdAt), "yyyy/MM/dd")}
        </p>
        <Viewer initialValue={post.content} />
        <style>
          {`
        
          
          .toastui-editor-contents > div > h1 {
            font-size: 24px;
            line-height: 28px;
            border-bottom: 1px solid #999;
            margin: 52px 0 15px 0;
            padding-bottom: 7px;
          }
          
        `}
        </style>
      </div>
    </div>
  );
};

export default CommunityInfo;
