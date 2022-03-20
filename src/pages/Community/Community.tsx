import { Link, useParams } from "react-router-dom";
import Grid from "../../layouts/Grid";
import GlossyCard from "../../components/GlossyCard";
import { useGetAllPostsQuery } from "../../features/post/postSlice";
import format from "date-fns/format";
import convertHtmlToText from "../../utils/convertHtmlToText";
import { useState } from "react";
const Community = () => {
  const [start, setStart] = useState(0);
  const { isbn } = useParams();
  const { data: posts, isLoading } = useGetAllPostsQuery({
    isbn: isbn ?? "",
    skip: start * 10,
  });
  if (isLoading) return <p>Loading..</p>;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      <div className="flex flex-row gap-40">
        {start !== 0 && (
          <button
            className="p-4 rounded-full hover:bg-transparent/[.06]"
            onClick={() => setStart(start - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </button>
        )}

        {posts.count > start * 10 + posts.data.length && (
          <button
            className="p-4 rounded-full hover:bg-transparent/[.06]"
            onClick={() => setStart(start + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        )}
      </div>

      <Grid>
        {posts.data.map((post: any, index: number) => (
          <div>
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
                  작성자 by.{post.author.userName}
                </p>
                <p className="text-xs text-black-200 mt-2">
                  {format(new Date(post.createdAt), "yyyy/MM/dd")}
                </p>
              </div>
            </GlossyCard>
          </div>
        ))}
        {posts.length === 0 && <div>게시글이 없어요 </div>}
      </Grid>
    </div>
  );
};

export default Community;
