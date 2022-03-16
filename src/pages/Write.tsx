import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { createPost } from "../features/post/postSlice";

const Write = () => {
  const { isbn } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();
  const onChangeTitle = useCallback((e) => setTitle(e.target.value), []);
  const onChangeContent = useCallback((e) => setContent(e.target.value), []);
  const onSubmit = useCallback(async () => {
    // submit function to server
    await dispatch(createPost({ title, content, isbn: isbn! }));
  }, [dispatch, title, content, isbn]);
  return (
    <div className="w-full h-full p-10 flex flex-col">
      <input
        placeholder="제목을 입력하세요"
        className="bg-white rounded-xl border-none focus:outline-none p-4"
        onChange={onChangeTitle}
      />
      <input value={isbn} disabled />
      <textarea
        className="bg-white rounded-xl border-none focus:outline-none p-4 min-h-[600px]"
        onChange={onChangeContent}
      />
      <button
        className="bg-green-600 text-white rounded-2xl p-4"
        onClick={onSubmit}
      >
        발행
      </button>
    </div>
  );
};

export default Write;
