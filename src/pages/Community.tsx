import { Link, useParams } from "react-router-dom";
import Grid from "../layouts/Grid";
import GlossyCard from "../components/GlossyCard";
import { useGetAllPostsQuery } from "../features/post/postSlice";
import { useEffect } from "react";

const Community = () => {
  const { isbn } = useParams();
  const { data: posts, isLoading } = useGetAllPostsQuery(isbn ?? "");

  useEffect(() => {
    console.log(isbn);
  }, [isbn]);
  if (isLoading) return <p>Loading..</p>;
  return (
    <div className="w-full h-full flex justify-center items-center py-10">
      <Grid>
        {posts.map((post: any, index: number) => (
          <GlossyCard key={index}>
            <Link to={`/community/${post.id}`}>
              <p className="font-black text-2xl">{post.title}</p>
              <img src={post.thumbnail} alt="thumbnail" />
            </Link>
            <p>{post.content}</p>
            <p className="text-xs text-black-200">작성자 by.{post.userId}</p>
            <p>{post.createdAt}</p>
          </GlossyCard>
        ))}
      </Grid>
    </div>
  );
};

export default Community;
