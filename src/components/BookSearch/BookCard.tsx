import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addBook } from "../../features/book/bookSlice";
import convertHtmlToText from "../../utils/convertHtmlToText";
import GlossyCard from "../GlossyCard";

interface BookProps {
  book: any;
}
const BookCard = ({ book }: BookProps) => {
  const dispatch = useAppDispatch();
  const onClickHasRead = useCallback(() => {
    dispatch(addBook(book));
  }, [book, dispatch]);

  return (
    <GlossyCard>
      <Link to={`/book/${book.isbn}`}>
        <div className="flex flex-col items-center py-10 gap-5">
          <p className="text-lg font-black text-center">
            {convertHtmlToText(book.title)}
          </p>
          <img src={book.image} alt="book_image" />
        </div>
      </Link>
      <div className="flex flex-row ml-auto gap-4">
        <button
          onClick={onClickHasRead}
          className="rounded-3xl bg-green-400 py-2 px-4 text-white font-black"
        >
          서재로
        </button>
        <Link
          to={`/community/search/${book.isbn}`}
          className="rounded-3xl bg-blue-400 py-2 px-4 text-white font-black"
        >
          모임 찾기
        </Link>
      </div>
    </GlossyCard>
  );
};

export default BookCard;
