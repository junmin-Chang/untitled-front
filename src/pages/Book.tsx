import { useParams } from "react-router-dom";
import { useGetBooksByNameQuery } from "../features/book/bookSlice";

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
        <li>{book[0].title?.replace(/<\/?[^>]+(>|$)/g, "")}</li>
        <li>{book[0].description?.replace(/<\/?[^>]+(>|$)/g, "")}</li>
      </ul>
    </div>
  );
};

export default Book;
