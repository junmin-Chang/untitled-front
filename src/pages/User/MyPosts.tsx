import { format } from "date-fns/esm";
import { Link } from "react-router-dom";
import GlossyCard from "../../components/GlossyCard";
import { useGetMyPostsQuery } from "../../features/post/postSlice";
import Grid from "../../layouts/Grid";
import convertHtmlToText from "../../utils/convertHtmlToText";

const MyPosts = () => {
  const { data: posts, isLoading } = useGetMyPostsQuery();
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="w-full h-full max-h-[500px] flex justify-center items-center p-10">
      <Grid>
        {posts.map((post: any, index: number) => (
          <GlossyCard key={index}>
            <Link to={`/community/${post.id}`}>
              <p className="font-black text-2xl">{post.title}</p>
              <img src={post.thumbnail} alt="thumbnail" />
            </Link>
            <p className="my-4">
              {post.content.length > 40
                ? convertHtmlToText(post.content.substring(0, 40) + "...")
                : convertHtmlToText(post.content)}
            </p>
            <div className="mt-auto">
              <p className="inline block bg-emerald-300	rounded-xl p-1 px-2 text-white font-black">
                작성자 by.{post.userId}
              </p>
              <p className="text-xs text-black-200 mt-2">
                {format(new Date(post.createdAt), "yyyy/MM/dd")}
              </p>
            </div>
          </GlossyCard>
        ))}
        {posts.length === 0 && <div>게시글이 없어요 </div>}
      </Grid>
    </div>
  );
};

export default MyPosts;
