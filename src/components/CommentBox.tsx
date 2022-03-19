import { useState, useCallback } from "react";
import { format } from "date-fns";
import { useAppSelector } from "../app/hooks";
import {
  useRemoveCommentMutation,
  useUpdateCommentMutation,
} from "../features/post/postSlice";

const CommentBox = ({ comment }: { comment: any }) => {
  const [prevComment, setPrevComment] = useState(comment.content);
  const [removeComment] = useRemoveCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const { user } = useAppSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);

  const onToggle = useCallback(() => {
    setEdit((value) => !value);
  }, []);

  const onDeleteComment = useCallback(() => {
    removeComment({ commentId: comment.id });
  }, [comment, removeComment]);
  const onChangeComment = useCallback(
    (e) => {
      setPrevComment(e.target.value);
      console.log(prevComment);
    },
    [prevComment]
  );
  const onUpdateComment = useCallback(() => {
    updateComment({ commentId: comment.id, data: { content: prevComment } });
    setEdit(false);
  }, [prevComment, updateComment, comment]);
  return (
    <div className="w-full py-8 bg-white border-b " key={comment.id}>
      <div className="flex flex-row gap-4">
        <p className="font-black">{comment.userId}</p>
        {user && user.user.userId === comment.userId && (
          <>
            <button
              className="text-xs text-gray-400 hover:text-gray-500 text-center"
              onClick={onToggle}
            >
              수정
            </button>
            <button
              onClick={onDeleteComment}
              className="text-red-400 text-xs hover:text-red-500"
            >
              삭제
            </button>
          </>
        )}
      </div>
      <p className="text-gray-400 font-semibold">
        {format(new Date(comment.createdAt), "yyyy/MM/dd hh:mm")}
      </p>
      {edit ? (
        <div className="flex flex-col gap-2">
          <textarea
            onChange={onChangeComment}
            value={prevComment}
            className="min-h-[150px] w-full border focus:outline-green-200 p-4"
          />
          <div className="ml-auto flex flex-row gap-2">
            <button
              onClick={onToggle}
              className="bg-red-500 rounded-xl inline-block px-4 py-2 text-white font-black hover:opacity-60"
            >
              취소
            </button>
            <button
              onClick={onUpdateComment}
              className="bg-green-500 rounded-xl inline-block px-4 py-2 text-white font-black hover:opacity-60"
            >
              수정
            </button>
          </div>
        </div>
      ) : (
        <p className="font-bold pt-6">{comment.content}</p>
      )}
    </div>
  );
};

export default CommentBox;
