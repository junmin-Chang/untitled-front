import { useParams } from "react-router-dom";
import Editor from "../../components/Editor";
import { useGetBooksByNameQuery } from "../../features/book/bookSlice";

const Write = () => {
  const { isbn } = useParams();
  const { data: book, isLoading } = useGetBooksByNameQuery({
    name: isbn,
  });

  return (
    <div className="w-full h-full p-10 flex flex-col gap-4">
      {!isLoading && book && (
        <div className="flex flex-col">
          <img
            src={book[0].image}
            alt="book_image"
            className="w-[100px] h-auto"
          />
          <p>{book[0].title}</p>
        </div>
      )}
      <Editor />
    </div>
  );
};

export default Write;
