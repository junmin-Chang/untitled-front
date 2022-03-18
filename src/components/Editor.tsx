import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as MarkdownEditor } from "@toast-ui/react-editor";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { createPost } from "../features/post/postSlice";

const Editor = () => {
  const { isbn } = useParams();
  const [title, setTitle] = useState("");
  const editorRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const onChangeTitle = useCallback((e: any) => {
    setTitle(e.target.value);
  }, []);
  const onClick = useCallback(async () => {
    await dispatch(
      createPost({
        title,
        content: editorRef.current.getInstance().getHTML(),
        isbn: isbn!,
      })
    );
  }, [dispatch, isbn, title]);

  useEffect(() => {
    editorRef.current.getInstance().removeToolbarItem("image");
    editorRef.current.getInstance().removeToolbarItem("codeblock");
    editorRef.current.getInstance().removeToolbarItem("code");
    editorRef.current.getInstance().removeToolbarItem("table");
  }, []);

  return (
    <>
      <input
        placeholder="제목을 입력하세요"
        className="bg-white rounded-xl border-none focus:outline-none p-4 max-w-[500px]"
        onChange={onChangeTitle}
        value={title}
      />
      <MarkdownEditor
        ref={editorRef}
        usageStatistics={false}
        initialEditType="wysiwyg"
        hideModeSwitch={true}
        height="800px"
      />

      <button
        className="bg-green-600 text-white rounded-2xl p-4"
        onClick={onClick}
      >
        작성 완료
      </button>
      <style>
        {`
        .toastui-editor-ww-mode .toastui-editor-ww-container {
          background-color: #ffffff;
        }
        
        .toastui-editor-contents > h1 {
          font-size: 24px;
          line-height: 28px;
          border-bottom: 1px solid #999;
          margin: 52px 0 15px 0;
          padding-bottom: 7px;
        }
        
        `}
      </style>
    </>
  );
};

export default Editor;
