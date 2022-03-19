import { useParams, useNavigate } from "react-router-dom";
import {
  removePost,
  useGetPostByIdQuery,
  useAddCommentMutation,
} from "../../features/post/postSlice";
import { Viewer } from "@toast-ui/react-editor";
import format from "date-fns/format";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useCallback, useState } from "react";
import CommentBox from "../../components/CommentBox";

const CommunityInfo = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery(id as string);

  const [comment, setComment] = useState("");
  const [addComment] = useAddCommentMutation();

  const auth = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onChangeComment = useCallback((e: any) => {
    setComment(e.target.value);
  }, []);

  const onSubmitComment = useCallback(async () => {
    addComment({ id: id!, data: { content: comment } });
    setComment("");
  }, [addComment, id, comment]);
  const onDelete = useCallback(async () => {
    await dispatch(removePost(id!))
      .unwrap()
      .then(() => {
        navigate("/community");
      });
  }, [dispatch, id, navigate]);
  if (isLoading) return <p>Loading..</p>;
  return (
    <div className="w-full h-full bg-white overflow-y-auto">
      <div className="w-full h-full max-w-xl mx-auto my-0 px-6 py-0 flex flex-col">
        {auth && auth.user.userId === post.userId && (
          <button
            className="bg-red-400 text-white font-black px-2 py-1 rounded-2xl ml-auto mt-4"
            onClick={onDelete}
          >
            삭제
          </button>
        )}

        <p className="mt-0 text-4xl font-black py-8">{post.title}</p>
        <div className="flex flex-row">
          <p className="mt-4 font-black">작성자 {post.author.userName}</p>
          <p className="mt-4 ml-auto text-gray-400 font-black">
            {format(new Date(post.createdAt), "yyyy/MM/dd")}
          </p>
        </div>

        <Viewer initialValue={post.content} />

        <div>
          <div className="flex flex-col w-full h-[150px] gap-2 mt-8">
            <p className="font-black text-2xl">
              {post.comment.length}개의 댓글이 있습니다.
            </p>
            <textarea
              className="min-h-[150px] w-full border focus:outline-green-200 p-4"
              value={comment}
              onChange={onChangeComment}
            />
            <button
              className="bg-green-500 rounded-xl inline-block ml-auto px-4 py-2 text-white font-black hover:opacity-60"
              onClick={onSubmitComment}
            >
              작성
            </button>
          </div>
          <div className="mt-12">
            {post.comment.map((c: any) => (
              <CommentBox comment={c} key={c.id} />
            ))}
          </div>
        </div>
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
