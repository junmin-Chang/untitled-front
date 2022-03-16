import { Link, useParams } from "react-router-dom";
import { useGetBooksByNameQuery } from "../features/book/bookSlice";
import convertHtmlToText from "../utils/convertHtmlToText";

const Book = () => {
  const { isbn } = useParams();
  const {
    data: book,
    isLoading,
    error,
  } = useGetBooksByNameQuery(isbn, {
    refetchOnFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>Error!</p>;
  return (
    <div className="flex flex-row w-full h-full">
      <ul>
        <li>{convertHtmlToText(book[0].title)}</li>
        <li>{convertHtmlToText(book[0].description)}</li>
        <Link
          to={`/community/write/${convertHtmlToText(book[0].isbn)}`}
          className="px-4 py-2 bg-green-400 text-white text-xl rounded-2xl"
        >
          이 책으로 스터디 구하러 가기
        </Link>
      </ul>
    </div>
  );
};

export default Book;
