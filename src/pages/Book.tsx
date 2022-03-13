import { useParams } from "react-router-dom";
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
    <div>
      <ul>
        <li>{convertHtmlToText(book[0].title)}</li>
        <li>{convertHtmlToText(book[0].description)}</li>
      </ul>
    </div>
  );
};

export default Book;
