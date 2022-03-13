import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addBook } from "../../features/book/bookSlice";
import { axiosPrivateInstance } from "../../services";
import convertHtmlToText from "../../utils/convertHtmlToText";
import GlossyCard from "../GlossyCard";

interface BookProps {
  book: any;
}
const BookCard = ({ book }: BookProps) => {
  const dispatch = useAppDispatch();
  const onClickWillRead = useCallback(() => {
    dispatch(
      addBook({
        title: book.title,
        image: book.image,
        isbn: book.isbn,
        hasRead: true,
      })
    );
  }, [book, dispatch]);
  const onClickHasRead = useCallback(async () => {
    await axiosPrivateInstance.post("/book", {
      title: book.title,
      image: book.image,
      isbn: book.isbn,
      hasRead: true,
    });
  }, [book]);
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
          읽었어요
        </button>
        <button
          onClick={onClickWillRead}
          className=" rounded-3xl bg-red-400 py-2 px-4 text-white font-black"
        >
          읽을거에요
        </button>
      </div>
    </GlossyCard>
  );
};

export default BookCard;
