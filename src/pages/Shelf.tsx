import { useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Button from "../components/common/Button";
import GlossyCard from "../components/GlossyCard";
import FilterMenu from "../components/Shelf/FilterMenu";
import { deleteBook, getBooks, updateBook } from "../features/book/bookSlice";
import Grid from "../layouts/Grid";
import convertHtmlToText from "../utils/convertHtmlToText";

const Shelf = () => {
  const { sortBy } = useParams();
  const dispatch = useAppDispatch();

  const onDelete = useCallback(
    (book: any) => {
      dispatch(deleteBook(book));
    },
    [dispatch]
  );

  const onClickHasRead = useCallback(
    async (book: any) => {
      await dispatch(
        updateBook({
          id: book.id,
          hasRead: true,
          willRead: false,
        })
      );
      await dispatch(getBooks(sortBy as string));
    },
    [dispatch, sortBy]
  );
  const onClickWillRead = useCallback(
    async (book: any) => {
      await dispatch(
        updateBook({
          id: book.id,
          hasRead: false,
          willRead: true,
        })
      );
      await dispatch(getBooks(sortBy as string));
    },
    [dispatch, sortBy]
  );
  const books = useAppSelector((state) => state.book);
  useEffect(() => {
    console.log(sortBy);
    dispatch(getBooks(sortBy as string));
  }, [dispatch, sortBy]);

  return (
    <div className="w-full h-full flex flex-col gap-10 items-center p-10">
      <FilterMenu />
      <Grid>
        {books.map((book, index) => (
          <GlossyCard key={index}>
            <Button
              className="bg-red-600 text-white max-w-[100px] ml-auto"
              onClick={() => onDelete(book)}
            >
              삭제
            </Button>
            <Link
              to={`/book/${book.isbn}`}
              className="flex flex-col items-center gap-10"
            >
              <p className="text-black font-black">
                {convertHtmlToText(book.title)}
              </p>
              <img src={book.image} alt={book.title} />
            </Link>
            <div className="flex flex-row gap-2 ml-auto">
              <Button
                className="bg-green-600 text-white max-w-[100px]"
                onClick={() => onClickHasRead(book)}
              >
                읽었어요
              </Button>
              <Button
                className="bg-green-700 text-white max-w-[100px]"
                onClick={() => onClickWillRead(book)}
              >
                읽을거에요
              </Button>
            </div>
          </GlossyCard>
        ))}
      </Grid>
    </div>
  );
};

export default Shelf;
